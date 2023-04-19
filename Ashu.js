import React from 'react'
export default function Ashu() {
  const name="akki";
  const curdate = new Date();
console.log(curdate);
const year = curdate.getFullYear();
console.log(year);
  return (
    <>
    <div>
      <h1 className="heading">Hello {name}!</h1>
    <heading />
    <p>This is a para {curdate.getFullYear()} </p>
    <ul>
      <li>food</li>
      <li>exercise</li>
    </ul>
    <img src="https://picsum.photos/200" />
  {/* document.getElementById("root"); */}
    </div>
    </>
  )
}

   