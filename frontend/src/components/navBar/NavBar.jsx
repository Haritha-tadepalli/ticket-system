import React from "react";
import './navBar.css';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NavBar = () => {
    return(
        <div className="navBar">
            <Link to="/" className="homeIcon">
                <FaHome size = "3rem" />
            </Link>
        </div>
    )
}

export default NavBar;