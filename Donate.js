import React from 'react'

export default function Donate() {
  return (
    <>
      <section className="book" id="book">
        <h1 className="heading"><span>blood</span>donate</h1>
        <div className="row">
          <div className="image">
             <img src="download.jpeg" alt="error"/>
          </div>
          <form action="" className="abc">
              <h3>enter details</h3>
              <input type="text" className="box" placeholder="your name"/> 
              <input type="number" className="box" placeholder="your contact number"/>
              <h1>date of birth</h1>
              <input type="date" className="box"/>
              <input type="number" className="box" placeholder="your id number"/>
              {/* <input type="file" className="box" placeholder="id proof"/> */}
             <h1>add photo of id</h1>
              <input type="file" className="box"/>
              <input type="submit" value="submit" className="btn3"/>
          </form>
        </div>
        <div className="credit"><b>thanks</b> <span>|<b>to donate</b></span></div>
       </section>
    </>
  )
}
