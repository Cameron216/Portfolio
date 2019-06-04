import React from 'react';
import postcssNormalize from 'postcss-normalize';
import './Sidebar.scss';
import ProfilePic from './../../assets/images/profile-pic.png';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

function Sidebar() {
    return (
        <div id='sidebar-container'>
            My Sidebar
            <img src={ProfilePic} id='profile-picture' alt='Profile Image'></img>
            <audio></audio>
            <Nav />
            <Footer />
        </div>
    );
}
  
export default Sidebar;