import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
 
  useEffect(() => {
    document.body.style.paddingTop = `${document.querySelector('nav').clientHeight}px`
    document.body.style.backgroundColor = '#FFFFFF !important'
  })

  document.addEventListener("scroll" ,function(){
    if(window.scrollY > 10){
      document.querySelector("nav").classList.remove("py-4")
    }
    else{
      document.querySelector("nav").classList.add("py-4")
    }
  })

 return <>
  
  <nav className="navbar navbar-expand-lg  fixed-top text-uppercase py-4 transition ">
  <div className="container">
    <Link className="navbar-brand text-white text-uppercase fw-bold fs-2" to="">Hussein Ashraf</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className={`navbar-nav nav-pills `} >
  
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? 'nav-link text-white fw-bold nav-pills active': 'nav-link text-white fw-bold ')} to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? 'nav-link text-white fw-bold nav-pills active': 'nav-link text-white fw-bold')} to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? 'nav-link text-white fw-bold nav-pills active': 'nav-link text-white fw-bold')} to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  
  </>
}
