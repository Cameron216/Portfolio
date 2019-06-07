import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

function Nav() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink exact={true} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/skills/">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio/">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact/">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
