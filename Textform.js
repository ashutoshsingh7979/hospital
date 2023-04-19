import React,{useState} from 'react'


export default function Textform(props) {
   const hdlupr =()=>{
        console.log("total upper case" + text);
        let newtext=text.toUpperCase();
        SetText(newtext);

    }
    const changes =(event)=>{
       console.log('value added');
       SetText(event.target.value);

    }
    const reverse =()=>{
        let reverseWordArr = text.split(" ").map(text => text.split("").reverse().join(""));
        return SetText(reverseWordArr.join(" "));
        // SetText(reverseWordArr);
    }
    const clear =()=>{
        let totalword=text.replace(/\|/g,"");
        SetText(totalword);
    }
    const [text,SetText]=useState("");
  return (
    <>
     <div className='container my-3'>
        <h1>{props.heading}</h1>
    <div className="mb-3">
       <textarea className="form-control my-2"  value={text} onChange={changes} id="mybox" rows="17"></textarea>
       <button className="btn btn-primary mx-2" onClick={hdlupr}>uppercase</button>
       <button className="btn btn-primary mx-2" onClick={reverse}>reverse</button>
       <button className="btn btn-primary mx-2" onClick={clear}>clear</button>
    </div>
    </div>
    <div className="container">
        <h1>my game summary is</h1>
        <p>{text.trim().split(/\s+/).length} words {text.trim().length} character</p>
    </div>
    </>
   
    
  )
}
