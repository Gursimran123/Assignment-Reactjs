import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
     <nav className='nav'>
        <h2>Dashboard</h2>
        <FontAwesomeIcon icon={faChevronRight} className='icon'/>
        <p>Check GST Data</p>
     </nav>
    </>
  )
}

export default Navbar