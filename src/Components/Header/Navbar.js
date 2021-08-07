import React, { Component } from 'react'
import logo from '../../Images/React_Coffie_Shop_logo.svg'
import {FaRegCreditCard} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoClose} from 'react-icons/io5'
import {Link} from 'react-router-dom'

import Nav from './Nav'

export default class Navbar extends Component {

    state = {
        isHidden: true,
    }


    showHidden = () => {
        console.log(this.state.isHidden)
        this.setState({ 
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div className="navbar_container">
                <Link className="home_page" to="/"><img className="logo" src={logo}/></Link>
                <div className="navbar_icons">
                    <div><FaRegCreditCard/></div>
                    <div><HiLocationMarker/></div>
                    <div onClick={this.showHidden} className="hamburger_button">{this.state.isHidden ? (<GiHamburgerMenu/>) : (<IoClose/>)}</div>
                </div>
                <div className={this.state.isHidden && window.innerWidth < 1025 ? ("hidden") : ("show")}>
                    <Nav/>
                </div>
            </div>
        )
    }
}
