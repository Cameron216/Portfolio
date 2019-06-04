import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about/">About</Link>
                </li>
                <li>
                    <Link to="/skills/">Skills</Link>
                </li>
                <li>
                    <Link to="/portfolio/">Portfolio</Link>
                </li>
                <li>
                    <Link to="/cv/">CV</Link>
                </li>
                <li>
                    <Link to="/blog/">Blog</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
