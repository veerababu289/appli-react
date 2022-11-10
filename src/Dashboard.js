import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
const Dashboard = () => {
         const data = localStorage.getItem("details")
         const data1 = JSON.parse(data)
       
  return (
    <div className='menubar'>
    <center>
        <ul>
           <li> <Link >Home</Link></li>
           <li> <Link to="/dashboard" > Dashboard</Link></li>
           <li><Link to="/about" > About</Link></li>
        </ul> <br/> <br/> <br/> 

    <form >
   
    <table border={1} className="table" >
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Password</th>
        </tr>
            {
                data1.map((value,index) => 
                   <tr key={index}>
                    <td>{value.uname1}</td>
                    <td>{value.email1}</td>
                    <td>{value.mobile1}</td>
                    <td>{value.pwd1}</td>
                   </tr>
                )
            }
    </table>
    </form>
    </center>
    </div>
  )
}

export default Dashboard