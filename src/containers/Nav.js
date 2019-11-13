import React, { Component } from 'react'
import '../styles/Nav.css'
import SearchBar from '../components/SearchBar'
import Logo from '../images/todontlist_logo.png'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-bar-items'>
                <SearchBar /> 
                <img className='logo' src={Logo} alt='Logo'></img>
                <button className='logout'>Logout</button>
            </div>
        )
    }
}
