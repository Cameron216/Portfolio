import React from 'react';
import './Sidebar.scss';
import ProfilePic from './../../assets/images/profile-pic.png';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

function Sidebar() {
    return (
        <div id='sidebar-container'>
            <img src={ProfilePic} id='profile-picture' alt='Profile'></img>
            <p className="sidebar-header">Cameron Bailey</p>
            <p className="sidebar-subheader">Frontend Developer</p>
            <Nav />
            <Footer />
        </div>
    );
}
  
export default Sidebar;