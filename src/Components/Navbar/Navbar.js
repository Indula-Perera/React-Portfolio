import React from 'react'
import  "./Navbar.css";
export default function navbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">InDuLa</div>
            <span>toggle</span>
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experiance</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button n-button'>Contact</button>
        </div>
      
    </div>
  )
}
