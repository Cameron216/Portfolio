import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = ({ sideDrawerToggle }) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact={true} onClick={sideDrawerToggle} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={sideDrawerToggle} to="/about/">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={sideDrawerToggle} to="/skills/">
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={sideDrawerToggle} to="/portfolio/">
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={sideDrawerToggle} to="/contact/">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
