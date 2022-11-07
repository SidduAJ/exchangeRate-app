import  './Login.css'
import {useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {
    let navigate=useNavigate();
    // let [date,setdate]=useState(0)

    // let clickeddate=new Date();
    // let btnclicked=()=>{
    //   setdate(clickeddate)
    // }

  return (
    <form onSubmit={()=>{navigate('dashboard')}}>
      <div className='Login-container'>
        <div className="login-items">
        <input className="login-item" type='text' placeholder='Enter user name' required/>
        <input className="login-item" type="email" placeholder='Enter your mail id' required/>
        <button className="login-btn" type='submit' >Login</button>              
        </div>
     </div>
    </form>
  )
}
