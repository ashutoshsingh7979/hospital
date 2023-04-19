import React from 'react'

export default function Ambulance() {
  return (
   <>
       <section className="book" id="book">
        <h1 className="heading"><span>for</span> ambulance</h1>
        <div className="row" >
          <div className="image">
             <img src="istockphoto-1212102727-612x612.jpg" alt="error"/>
          </div>
          <form action="" className="abc">
              <h3>enter details</h3>
              <input type="text" className="box" placeholder="your name"/> 
              <input type="number" className="box" placeholder="your contact number"/>
              <input type="text" className="box" placeholder="enter your address" /><h1>give address proof</h1>
              <input type="file" className='box'/>
              <input type="number" className="box" placeholder="your id number"/><h1>photo of id proof</h1>
              <input type="file" className="box" placeholder="id proof"/>
              <input type="submit" value="submit" className="btn3"/>
          </form>
        </div>
        
       </section>
   </>
  )
}
