import React from 'react'
// import Booking from './component/Booking';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link} from 'react-router-dom';

export default function Front() {
  return (
    <>
     <div className="home">
    <div className="image">
        <img src="doctor-2027768_960_720.webp" alt="error"/>
            </div>
            <div className="content">
                <h3>stay safe, stay healthy</h3>
                <p>its time to stay fit and healthy</p>
                {/* <button class="btn2">contact us</button> */}
                {/* <h2 classNameName='box3'>fit india</h2> */}
           <Link className='button2' to="/track">trackpatient</Link>
            </div>
     </div>
    </>
    
  )
}
