import React from "react";
import './home.css'
import { Link } from "react-router-dom";

const Home = () => {

    const links = [
        // {
        //     path : '/',
        //     name: "Home"
        // },
        {
            path : '/ticket',
            name : "Create Ticket"
        },
        {
            path : '/agent',
            name : "Create Agent"
        },
        {
            path : '/display',
            name : "View Tickets"
        },
    ];

    return(
        <div className="homeMain">
            <h1>Welcome to Smart Tickets</h1>
            <ul className="navigation">
                {links.map((link, key) => (
                    <li key={key} className="links" >
                        <Link to={link.path} className="link" >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Home;