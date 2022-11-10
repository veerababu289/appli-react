import React,{useState} from 'react'
import './App.css'
import {Navigate} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Register = () => {
      const Navigate = useNavigate()
       const [username,setUsername] = useState("")
       const [email,setEmail] = useState("")
       const [mobile,setMobile] = useState("")
       const [pwd,setPwd] = useState("")
       const [conpwd,setConpwd] = useState("")
  
       const gotologin = (e) => {
    e.preventDefault()
    const gett = localStorage.getItem("details")
    const get = JSON.parse(gett)
    if (username.length<5){
        alert("Enter proper name")
    }
    else if (mobile.length<10 || mobile.length>10 )
    {
        alert("Incorrect mobile number");
    }
    else if(pwd.length<8)
    {
        alert("password must be 8 characters");
    }
    else if(pwd !== conpwd)
    {
        alert("password didn't matched");
    }
    else{

    if (get){
        get.push({uname1:username,email1:email,mobile1:mobile, pwd1:pwd, conpwd1:conpwd})
        localStorage.setItem("details",JSON.stringify(get))
    }
    else{
        const userdetails ={uname1:username,email1:email,mobile1:mobile, pwd1:pwd, conpwd1:conpwd};
        const userdet = [];
        userdet.push(userdetails);
        console.log(userdet)
        localStorage.setItem("details",JSON.stringify(userdet))
      
    }
    Navigate ("/login")
   }

   }

  return (
    <div>
        <center>
            <h1>RegisterForm</h1>
            <form onSubmit= {gotologin} >
                <label>Username</label> 
                <input type= "text" value= {username} onChange = {(e) => setUsername(e.target.value)} /> <br/><br/>
                <label>Email</label>
                <input type= "text" value = {email} onChange = {(e) => setEmail(e.target.value)} /><br/><br/>
                <label>Mobile</label>
                <input type= "number" value = {mobile} onChange = {(e) => setMobile(e.target.value)} /><br/><br/>
                <label>Password</label>
                <input type= "password" value= {pwd} onChange = {(e) => setPwd(e.target.value)} /><br/><br/>
                <label>Confirmpassword</label>
                <input type= "password" value = {conpwd} onChange = {(e) => setConpwd(e.target.value)} /><br/><br/>
                {/* <input type = "submit" /> */}
             <input type= "submit" value = "submit" />
            </form>
        </center>
    </div>
  )
}

export default Register