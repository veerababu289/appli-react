import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
    <div className='menubar'>
        <ul>
           <li> <Link  >Home</Link></li>
           <li> <Link to="/dashboard" > Dashboard</Link></li>
           <li><Link to="/about" > About</Link></li>
        </ul>
    </div>
    <h1>About</h1>
    </div>
  )
}

export default About