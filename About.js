import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="services" id="services">
        <h1 className="heading">
          <span className="m1">our services</span>
        </h1>
        <div className="box-container">
          {/* <div className="box">
            <i className="fa fa-stethoscope"></i>
            <h3>admit</h3>
            <p>services available 24 hrs</p>
            <Link className="button2" to="/checkup">
                     admit form
            </Link>
            <Link to="/checkup">
                <button className="button">consult</button>
            </Link>
          </div> */}
          <div className="box">
            <i className="fa fa-hospital-o"></i>
            <h3>blood donate</h3>
            <p>help others</p>
            {/* <Link to="/expert">
        <button className="button" >consult</button>
              </Link>       */}
            <Link to="/donate">
              <button className="button">donate</button>
            </Link>
            {/* <Link className='button2' to="/blood">blood donate</Link> */}
          </div>

          <div className="box">
            <i className="fa fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>24/7 ambulance available</p>
            {/* <Link className='button' to="/ambulance">ambulance</Link> */}
            <Link to="/ambulance">
              <button className="button">ambulance</button>
            </Link>
          </div>

          <div className="box">
            <i className="fa fa-plus-square"></i>
            <h3>Medicine</h3>
            <p>Best medicine</p>
            {/* <Link className='button' to="/medicine">medicine</Link> */}
            <Link to="/medicine">
              <button className="button">medicine</button>
            </Link>
          </div>
          {/* <div className="box">
            <i className="fa fa-bed"></i>
            <h3>Meds faclity</h3>
            <p>Meds available 24*7</p>
             <Link to="/bed">
                <button className="button">beds</button> 
            </Link> 
            
        </div>
        <div className="box">
            <i className="fa fa-heart"></i>
            <h3>Total care</h3>
            <p>Best care for your health</p>
             <Link to="/care">
                <button className="button">care</button>
            </Link> 
        </div>
        <div className="box">

            <i className="fa fa-h-square"></i>
            <h3>Blood donate</h3>
            <p>For blood donatition</p>
            <Link to="/donate">
                <button className="button">blood</button>
            </Link> 
        </div>
        <div className="box">
            <i className="fa fa-eye"></i>
            <h3>Eye care</h3>
            <p>Best for eyes care</p>
             <Link to="/eye">
                <button className="button">eyes care</button>
            </Link> 
        </div> */}
        </div>
      </section>
    </>
  );
}
