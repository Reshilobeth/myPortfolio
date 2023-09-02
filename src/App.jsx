import React,{useState, useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Works from './Components/Works'
import AboutMeFull from './Components/AboutMeFull'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'


const App = () => {

  // const [loading, setLoading ] = useState(true)

  // const spinner = document.getElementById('spinner')

  // if(spinner){
  //   setTimeout(() => {
  //     spinner.style.display = 'none'
  //   }, 1000);
  // }

  const {pathname} = useLocation();
  
  useEffect(()=>{
    window.scrollTo(0,0,0);
  })


  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/works' element = {<Works />} />
      <Route path='/aboutme' element = {<AboutMeFull />} />
      <Route path='/contactme' element = {<ContactMe />} />
    </Routes>
  
    </>
    

  )
}

export default App