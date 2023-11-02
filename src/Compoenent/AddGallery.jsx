import React, { useState ,useContext } from 'react'

import GalleryContext from '../Context/GalleryContext'



export default function AddGallery() {
   const Context = useContext(GalleryContext)
    const {AddGallery}=Context
    
    const AddGallerys=(e)=>{
        e.preventDefault();
        AddGallery(Gallery.Gallerytitle,Gallery.Gallerylink,Gallery.Gallerytype,Gallery.Gallerydesc);
        setGallery({Gallerytitle:"",Gallerylink:"",Gallerytype:"",Gallerydesc:"",eventDate:"",eventTime:""});
        // window.location.reload();
    
    } 


    function Base64Converter(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
      
          reader.onload = () => {
            const base64Image = reader.result;
            resolve(base64Image);
          };
      
          reader.onerror = (error) => {
            reject(error);
          };
      
          reader.readAsDataURL(file);
        });
      }
      
      

    const handleImageUpload = async(event) => {
    const file = event.target.files[0];  

    // if (file) {

    //   const imageRef = ref(storage, `images/${file.name}`);
    // uploadBytes(imageRef, file).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setGallery({...Gallery,Gallerylink:url});
    //   });
    // });

      const imageBase64 =await Base64Converter(file);

        setGallery({...Gallery,Gallerylink:imageBase64});
        console.log(imageBase64)
    }
  

    const [Gallery,setGallery]=useState({Gallerytitle:"",Gallerylink:"",Gallerytype:"",Gallerydesc:"",eventDate:"",eventTime:""})


    const onChange =(e)=>{
      
      setGallery({...Gallery,[e.target.name]:e.target.value})

    }

  return (
    <>
    <div className='container'>

    <div className="container py-5 w">
    

    <form style={{border:"0.2rem solid rgb(28, 28, 28)",borderRadius:"3rem",backgroundColor:"rgb(28, 28, 28)"}} className="p-md-5 bg-body-tertiary shadow">

      <h1 style={{color:"white"}}>Add new Event</h1>
      <p style={{color:"white"}}>Enter every data very correctly</p>

      <div className="form-floating mb-3">
        <input type="text" id="form4Example1" className="form-control" name='Gallerytitle' value={Gallery.Gallerytitle} onChange={onChange} />
        <label className="form-label" forhtml="form4Example1" style={{color:'black'}}>Event title</label>
      </div>

      <div className="form-floating mb-3">
        <input type="date" id="form4Example1" className="form-control" name='eventDate' value={Gallery.eventDate}  onChange={onChange} />
        <label className="form-label" forhtml="form4Example1" style={{color:'black'}}>Event Date</label>
      </div>

      <div className="form-floating mb-3">
        <input type="time" id="form4Example1" className="form-control" name='eventTime' value={Gallery.eventTime}  onChange={onChange} />
        <label className="form-label" forhtml="form4Example1" style={{color:'black'}}>Event Time</label>
      </div>





      

      <div className="mb-3 text-left">
      <label className="form-label" style={{textAlign:"left",color:"white"}} forhtml="form4Example2">Gallery Image</label>
        <input type="file" accept=".jpeg, .png, .jpg" id="form4Example2" className="form-control" value={Gallery.Gallerylink} name='Gallerylink' onChange={handleImageUpload} />
        
      </div>
      {Gallery.Gallerylink && (
        <div className='text-center'>
          <h3>Uploaded Image:</h3>
          <img src={`${Gallery.Gallerylink}`} alt="Uploaded" className='rounded mx-auto d-block mb-3' style={{maxWidth:'400px',width:'100%',height:'auto'}} />
        </div>
      )}
      



      

      <select className="form-select mb-3" aria-label="Default select example" name='Gallerytype'  onChange={onChange}>
        <option defaultValue={Gallery.Gallerytype} > Select -- Event type</option>
        <option value="Event 1">Event 1</option>
        <option value="Event 2">Event 2</option>
        <option value="Event 3">Event 3</option>
        <option value="Event 4">Event 4</option>

      </select>

      <div className="form-floating mb-3">
        <input type="text" id="form4Example3" className="form-control" name='Gallerydesc'value={Gallery.Gallerylink}  onChange={onChange} />
        <label className="form-label" style={{color:'black'}} forhtml="form4Example3">Event Description</label>
      </div>



      
      <button type="submit" style={{backgroundColor:" rgb(124, 43, 124)",color:"white"}} className="w-100 btn btn-lg" onClick={AddGallerys}>POST EVENT</button>

    </form>


</div>
    </div>
    </>
  )
}
  