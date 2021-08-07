import React, { Component } from 'react'
import {Link } from 'react-router-dom' 
import {FaRegCreditCard} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'


export default class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="hover_1 flex"><Link className="links" to="/menu">Menu</Link></div>
                <Link className="links link_hidden flex" to="/gift_cards"><FaRegCreditCard/>Gift Cards</Link>
                <Link className="links link_hidden flex" to="/locations"><HiLocationMarker/>Locations</Link>
                <div className="hover_2 flex"><Link className="links" to="/about">About</Link></div>
                <Link className="links flex" to="/job_listings">Job Listings</Link>
                <Link className="links flex" to="/feedback">Feedback</Link>
            </nav>
        )
    }
}
