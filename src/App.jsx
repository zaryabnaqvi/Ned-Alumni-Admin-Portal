import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Page/Home'
import SignUp from './Page/Signin'
import Login from './Page/Login'
import Navbar from './Compoenent/Navbar'
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Gallery from './Page/Gallery'
import GalleryState from './context/GalleryState'
import CreateEvents from './Page/CreateEvents'
import ManageEvents from './Page/ManageEvents'
import CreateOccassion from './Page/CreateOccassion'
import CreateAlumniProject from './Page/CreateAlumniProjects'
import CreatePotentialProject from './Page/CreatePotentialProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GalleryState>
    <BrowserRouter>

  <Navbar/> 
  <Routes>
    <Route index path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>

    <Route path='/events' element={<Gallery/>}/>
    <Route path='/createEvents' element={<CreateEvents/>}/>
    <Route path='/ManageEvents' element={<ManageEvents/>}/>

    <Route path='/Occassion' element={<Gallery />} />
    <Route path='/createOccassion' element={<CreateOccassion />} />
    <Route path='/ManageOccassion' element={<ManageEvents />} />

    <Route path='/AlumniProjects' element={<Gallery />} />
    <Route path='/createAlumniProjects' element={<CreateAlumniProject />} />
    <Route path='/ManageAlumniProjects' element={<ManageEvents />} />

    <Route path='/PotentialProjects' element={<Gallery />} />
    <Route path='/createPotentialProjects' element={<CreatePotentialProject />} />
    <Route path='/ManagePotentialProjects' element={<ManageEvents />} />
 
  </Routes>
      
  </BrowserRouter>
  </GalleryState>
    </>
  )
}

export default App
