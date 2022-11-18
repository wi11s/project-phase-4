import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 

export default function Header({setUser}) {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Social Media</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className='nav-item' to="/"><h6 className="nav-item-text">Home</h6></Link>
          <Link className='nav-item' to="profile"><h6 className="nav-item-text">Profile</h6></Link>
          <Link className='nav-item' to="search"><h6 className="nav-item-text">Search</h6></Link>
          <button id="logoutButton" onClick={handleClick} className="btn nav-item">Log Out</button>
        </div>
    </nav>
  )
}
