import React from 'react'
import Header from './component/Head/Header'
import Home from './component/Home/Home'
import About from './component/About/about'
import Project from './component/Project/project'
import Experience from './component/Experience/Experience'
import Skill from './component/Skill/Skill'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import GoogleMap from './component/Map/GoogleMap'
import Footer from './component/Footer/Footer'
import "./App.css"

const location = {
  address: '806/14B Kalyangarh Ashoknaagrh, kolkata, India.',
  lat: 	22.84039,
  lng: 88.6241351,
} 


const App = () => {
  return ( 
    <>
      <Header />
      <Home />
      <About />
      <Project />
      <Experience />
      <Skill />
      <Blog />
      <Contact/>
      {/* <GoogleMap/> */}
      <GoogleMap location={location} zoomLevel={17} /> {/* include it here */}
      <Footer/>
    </>
  )
}

export default App
