import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
import {checking} from './Login'
const Protected = () => {
    
 const isloggedin= checking();
 console.log(isloggedin)
  return (
   
      isloggedin ? <Outlet/> : <Navigate to = "/login" />
  )
}

export default Protected