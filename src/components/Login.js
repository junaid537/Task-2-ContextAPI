import React ,{useState,useContext} from 'react'
import { LoginContext } from './contexts/LoginContext'
export function Login() {
    //destruucture LoginCotext
    const {setUsername,setShowProfile}=useContext(LoginContext);
  
  return (
    <div>
        <input type="text" placeholder="Username ..." onChange={(event)=>{setUsername(event.target.value)}}/>
        <input type="text" placeholder="password ..." />
        <button onClick={()=>{setShowProfile(true)}}> LOGIN </button>  
        
    </div>
  )
}

