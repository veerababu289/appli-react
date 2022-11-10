import React from 'react'
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard'
import about from './About'

const Home = () => {
  return (
    <div className='menubar'>
        <ul>
           <li> <Link to="/" >Home</Link></li>
           <li> <Link to="/dashboard" > Dashboard</Link></li>
           <li><Link to="/about" > About</Link></li>
        </ul>
    </div>
  )
}

export default Home