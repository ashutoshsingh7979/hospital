import React from 'react'
// import { Route, Router } from 'react-router-dom'
// import Navbar from './component/Navbar';
// import Navbar2 from './component/Navbar2'
import { useState } from 'react'
export default function Booking() {
    const [employes,setimployes] = useState(
        [
            
        ]
    ) 
  return (
   <>
   {/* <Navbar2/> */}
     <div className="icons-container">
        <div className="icons">
            <i className="fa fa-user-md" id='icm1' ></i>
            <h3>100+</h3>
            <p>doctors at work</p>
        </div>
        <div className="icons">
            <i className="fa fa-wheelchair" id='icm4'></i>
            <h3>500+</h3>
            <p>beds available</p>
        </div>
        <div className="icons">
            <i className="fa fa-hospital-o" id='icm2' > </i>
            <h3>1000+</h3>
            <p>satisfied customer</p>
        </div>
        <div className="icons">
            <i className="fa fa-hospital-o" id='icm2' > </i>
            <h3>100+</h3>
            <p>online medical store</p>
        </div>
        <div className="icons">
            <i className="fa fa-hospital-o" id='icm2' > </i>
            <h3>1000+</h3>
            <p>satisfied customer</p>
        </div>
        <div className="icons">
            <i className="fa fa-medkit" id='icm3' > </i>
            <h3>150+</h3>
            <p>24*7 avilabe workers</p>
        </div>
    </div>
   </>
  )
}
