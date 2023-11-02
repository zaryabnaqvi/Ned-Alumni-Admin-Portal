import React, { useState } from 'react'
import GalleryContext from '../Context/GalleryContext'

 const GalleryState=(props)=> {
  
    const [Gallery,setGallery]=useState([]);



  const getGallery=async()=>{
    const data = await fetch("http://localhost:3000/getEventsList",{
      method:"GET",
    
    })
    const json=await data.json();
    
    setGallery(json)
  }

  const AddGallery=async(title,Url,choice,content,eventDate,eventTime)=>{
    const data = await fetch("http://localhost:3000/saveEvent",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({title,Url,choice,content,eventDate,eventTime})}
    )
    if(data.status==200){
    const json=await data.json();
    console.log(json)
    let state=Gallery; 
    setGallery(state.concat(json))
    window.location.reload();
    
    }else{
     alert( "failed to get data")
    }

  }

  const UpdateGallery=async(id,title,Url,choice,content,eventDate,eventTime)=>{
    const data = await fetch(`https://gold-adventurous-perch.cyclic.cloud/api/gallery/updategallery/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({title,Url,choice,content,eventDate,eventTime})}
    )
    if(data.status==200){
      const json = await data.json()
      console.log(json)
      alert("updated successfully")
      window.location.reload();
    }
    let EditNotes=Gallery;
    console.log(EditNotes)
    for (let index = 0; index < EditNotes.length; index++) {
      if (EditNotes[index]._id===id){
        EditNotes[index].title=title;
        EditNotes[index].Url=Url;
        EditNotes[index].choice=choice;
        EditNotes[index].desc=desc;
        EditNotes[index].eventDate=eventDate;
        EditNotes[index].eventTime=eventTime;


        

        break;
      }
    }
    console.log(EditNotes);
    setGallery(EditNotes);

    

  }
  const deleteGallery=async(id)=>{
    console.log(id)
    const data = await fetch(`http://localhost:3000/deleteEvent/${id}`,{
      method:"DELETE",
     
    })
    const NewNotes = Gallery.filter((video)=>{return video._id!==id});
    setGallery(NewNotes);


  }



  
  
  
  return (
    <GalleryContext.Provider value={{Gallery,setGallery,AddGallery,UpdateGallery,deleteGallery,getGallery}}>
        {props.children}
    </GalleryContext.Provider>   
  )
}

export default GalleryState;

