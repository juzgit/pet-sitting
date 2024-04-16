import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Name-App</Link>
                </li>

                <li className="nav-item">
                    <Link to="sign-up-page" className="nav-link">Sign-Up</Link>
                </li>

                <li className="nav-item">
                    <Link to="client-login-page" className="nav-link">Login</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;