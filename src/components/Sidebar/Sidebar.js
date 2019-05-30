import React from 'react';

import './Sidebar.scss';
import ProfilePic from './../../assets/images/profile-pic.png';
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';

function Sidebar() {
    return (
        <div>
            My Sidebar
            <img src={ProfilePic} id='profile-picture' alt='Profile Image'></img>
            <Nav />
            <Footer />
        </div>
    );
}
  
export default Sidebar;