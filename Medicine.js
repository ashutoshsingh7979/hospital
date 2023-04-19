import React from 'react'

export default function Medicine() {
  return (
   <>
    <section className="book" id="book">
        <h1 className="heading"><span>for</span>medicine</h1>
        <div className="row">
          <div className="image">
             <img src="images.jpeg" alt="error"/>
          </div>
          <form action="" className='medicine'>
              <h3>medicine</h3>
              <input type="text" className="box" placeholder="your name"/> 
              <input type="number" className="box" placeholder="your contact number"/>
              <input type="text" className="box" placeholder='enter your address'/>
              <h1>add photo of discription</h1>
              <input type="file" className="box"/>
              <input type="submit" value="submit" className="btn3"/>
          </form>
        </div>
        {/* <div className="credit">thanks<span> |</span>|</div> */}
       </section>
   
   </>
  )
}
