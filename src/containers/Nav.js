import React, { Component } from 'react'
import '../styles/Nav.css'
import Logo from '../images/todontlist_logo.png'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-bar-items'>
                <img className='logo' src={Logo} alt='Logo'></img>
                <button className='logout'>Logout</button>
            </div>
        )
    }
}
