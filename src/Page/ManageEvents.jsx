import React, { useContext } from 'react'
import AcceptanceEvent from '../Compoenent/AcceptanceEvent'
import GalleryContext from '../Context/GalleryContext'
import { useEffect } from 'react'

export default function ManageEvents() {
  const Context = useContext(GalleryContext)
  useEffect(() => {
    Context.getGallery()
  }, [])
  return (

    <>
      <div className='container m-5'>
        <h2 className='h1 p-5'>Pending Events</h2>
        {Context.Gallery.map((event) => {
          if (event.status === "pending") {
            return (
              <AcceptanceEvent event={event} />

            )
          }
        })

        }
      </div>
    </>
  )
}
