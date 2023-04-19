import React from 'react'

export default function Checkup() {
  return (
 <>
     <section class="book" id="book">
        <h1 class="heading"><span>for</span> checkup</h1>
        <div class="row">
          <div class="image">
             <img src="elderly-checkup-with-doctor-cartoon-vector-23516060.jpg" alt="error" />
          </div>
          <form action="">
              <h3>enter details</h3>
              <input type="text" class="box" placeholder="your name"/> 
              <input type="text" className='box' placeholder='spacialist' />
              <input type="number" class="box" placeholder="your contact number"/>
              <input type="number" class="box" placeholder="enter your age"/>
              <h1>enter date of birth</h1>
              {/* <input type="date" class="box"/>
             
                <input type="radio" name="travel" id="travelb" class="box"/><h1>adhar id</h1>
                <input type="radio" name="travel" id="travelb" class="box"/><h1>pan id</h1> */}
           
            {/* <label for="travelb">
                <input type="radio" name="travel" id="travelb" class="box"/>pan id
            </label> */}
              <input type="number" class="box" placeholder="your id number"/><h1>add id photo</h1>
              <input type="file" class="box" placeholder="id proof"/>
              <input type="submit" value="submit" class="btn3"/>
    
          </form>
        </div>
        {/* <div class="credit">thanks<span> |to visit</span>|</div> */}
       </section>
 </>
  )
}
