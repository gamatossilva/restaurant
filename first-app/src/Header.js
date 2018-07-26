import React, {Component} from 'react';
import {Link} from 'react-router';

export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav">
                        <li className="nav-item"><Link className="nav-link" to={"/home"}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={"/detalhes"}>Details</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}