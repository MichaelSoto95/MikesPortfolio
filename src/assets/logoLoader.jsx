import React from 'react'
import '../assets/logo-loader.css'
import logo from '../assets/images/logo.svg'
const LogoLoader = () => {
    return (
        <div className='animation'>
            <img src={logo} alt="logo" width='100px' />
        </div>
    )
}

export default LogoLoader
