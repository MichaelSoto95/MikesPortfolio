import React from 'react'
import '../components/navbar.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

    const [openNav, SetOpenNav] = useState(false)
    return (
        <div className='navbar' id='nav'>
            <div className="navbar-container">
             <Link to='/' className='link'><div className="logo-container">
                    <div className='icon'></div>
                    <div className="logo">Michael<span className='black'>.</span>Soto</div>
                </div></Link> 

                <ul className={openNav ? 'nav-list active' : 'nav-list'} >
                    <li className='nav-list-item' onClick={() => SetOpenNav(false)}> <Link to="/" className='link'>Home</Link></li>
                    <li className='nav-list-item' onClick={() => SetOpenNav(false)}> <Link to="/about" className='link'>About</Link></li>
                    <li className='nav-list-item' onClick={() => SetOpenNav(false)}> <Link to="/projects" className='link'>Projects</Link></li>
                </ul>
                <div className="burger-menu">
                    <button onClick={() => SetOpenNav(!openNav)}>{openNav ? 'X' : '|||'}</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
