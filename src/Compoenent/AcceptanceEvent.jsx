import React, { useContext } from 'react'
import GalleryContext from '../Context/GalleryContext'
import moduleName from "../assets/download (4).png"


export default function AcceptanceEvent(props) {
	
		
	

    // const Context = useContext(GalleryContext)
    // const { deleteGallery } = Context
    // const { Gallery, UpdateGallery } = props;
	// const dateString = Gallery.createdAt
	// 	const options = {
	// 		weekday: 'short',  // Short weekday name (e.g., "Mon")
	// 		month: 'short',    // Short month name (e.g., "May")
	// 		day: 'numeric',    // Day of the month (e.g., "25")
	// 		year: 'numeric',   // Year (e.g., "2020")
	// 		daySuffix: '2-digit' // Day of the month with suffix (e.g., "25th")
	// 	};
	
	// 	const date = new Date(dateString);
	// 	const formattedDate = date.toLocaleDateString('en-US', options);
	
    return (
        <>
 
    
 <div class="card mb-3" style={{maxWidth: "100%"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={moduleName} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div style={{textAlign:"left"}} class="card-body">
        <h5 class="card-title">Event title</h5>
        <p class="card-text text-left">Event content blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success">Approve<i class="fa-solid fa-check text-light mx-2"></i></button>
  <button type="button" class="btn btn-danger">Decline<i class="fa-solid fa-circle-xmark text-light mx-2"></i></button>
</div>
        <p class="card-text text-left"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
                           
                           
           

        </>
    )
}
