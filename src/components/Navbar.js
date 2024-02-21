import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="nav-container">
            <div className="nav-outer">
                <div className="nav-right">
                    <div className="nav-home">
                    <Link to="/Home">Home</Link>
                    </div>
                    <div className="nav-FormAction">
                    <Link to="/FormAction">GO TO FORM</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar