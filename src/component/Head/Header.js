import React, { useState } from "react"
import "./Header.css"
// import logo from "../pic/logo.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            {/* <img src={logo} alt="" /> */}
            <h1><a href="#Home">PortFolio</a></h1>
            
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li><a href='#Home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#project'>Project</a></li>
                        <li><a href='#Experience'>Experience</a></li>
                        <li><a href='#skill'>Skills</a></li>
                        <li><a href='#blog'>Blog</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        <li><a href="./Ripam_Kundu.pdf" download='Ripam Kundu CV'><button className='home-btn'>Download CV</button></a></li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      <section className='demo'></section>
    </>
  )
}

export default Header
