import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import App from './App'
import {Outlet,Navigate} from 'react-router-dom'
export const checking = () => {
  return (sessionStorage.getItem('loggedin')==="true"?true:false)
}
const Login = () => {
    var Navigate = useNavigate()
    const [username2,setUsername2] = useState("")
    const [pwd2,setPwd2] = useState("")

    const gotohome = (e) => {
        e.preventDefault()
        const data = localStorage.getItem("details");
      const  data1 = JSON.parse(data);
      console.log(data1)
            var flag = false;
          
            for ( var i=0; i<data1.length; i++)
            {
                
               if (data1[i].uname1=== username2) 
               {
               
                 if (data1[i].pwd1===pwd2)
                 {
                   
                  flag=true;
                  break;
                 }
                 break;
               }
             }
              if (flag===false)
              {
                alert("failed")
              }
              else
              {
                sessionStorage.setItem("loggedin",true)
                 Navigate ("/home")
              }
    }
    const reg = () => {
      Navigate ("/")
    }
  return (
 
    <div>
        <center>
            <h1>Login</h1>
            <form onSubmit={gotohome}>
            <label>Username</label>
            <input type="text" value={username2} onChange = {(e) => setUsername2(e.target.value)} /> <br/> <br/>
            <label>Password</label>
            <input type="password" value= {pwd2} onChange = {(e) => setPwd2(e.target.value)} /> <br/> <br/>
            <input type = "submit" value="Login" />
            <button onClick={reg}>Register</button>
            </form>
        </center>
    </div>
  )
}

export default Login