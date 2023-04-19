import React from 'react'

export default function Appoint() {
  return (
    <>
    <section className="book" id="book">
  <h1 className="heading"><span>book</span> now</h1>
  <div className="row">
    <div className="image">
        <img src="doctora.gif" alt="error"/>
    </div>
    <form action="">
        <h3>book appointment</h3>
        <input type="text" className="box" placeholder="your name"/> 
        <input type="number" className="box" placeholder="your number"/>
        <input type="email" className="box" placeholder="your email"/>
        <input type="date" className="box"/>
        <input type="submit" value="book now" className="btn3"/>
    </form>
  </div>
  <div className="credit">thanks<span> |to visit</span>|</div>
 </section>
    </>
    
  )
}
