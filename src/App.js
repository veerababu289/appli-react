import React,{useState} from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Protected from './Protected'

const App = () => {



  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<Protected  />} >
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route path = '/about' element = {<About/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App