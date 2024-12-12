import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  function abc(){
    document.getElementById("abc");
  }
  function abce(){
    document.getElementById("abce");
  }


  return (
    <>
       <div className='first flex justify-between '>
           <div className='flex gap-5'>
              <h1>DT</h1>
              <h2>thangavelraja36@gmail.com</h2>
           </div>
           <div className='flex gap-10  '>
          <Link to='/'><h1 id='abc' onClick={abc}>Home</h1></Link>
          <Link to='*'><h1 id='abce ' onClick={abce}>Services</h1></Link>
          <Link to='!' >About</Link> 
          <Link to='a' >projects</Link>
          <Link to='c' ><h1>Contact</h1></Link>
           </div>
           <div>
            <button className='btu1'>HIRE mE!</button>
           </div>
       </div>
    </>
  )
}

export default Header