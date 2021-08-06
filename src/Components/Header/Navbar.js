import React, { Component } from 'react'
import logo from '../../Images/React_Coffie_Shop_logo.svg'
import {FaRegCreditCard} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar_container">
                <img className="logo" src={logo}/>
                <div className="navbar_icons">
                    <div><FaRegCreditCard/></div>
                    <div><HiLocationMarker/></div>
                    <div><FaRegCreditCard/></div>
                </div>
            </div>
        )
    }
}
