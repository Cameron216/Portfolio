import React, { Component } from 'react';
import './Sidebar.scss';
import ProfilePic from './../../assets/images/profile-pic.png';
import Nav from './Nav/Nav';
import Backdrop from './Backdrop/Backdrop';
import Footer from './Footer/Footer';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideDrawerOpen: true
        };
    }

    sideDrawerToggle = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({
            sideDrawerOpen: false
        });
    };

    render() {
        return (
            <div>
                <Backdrop
                    sideDrawerOpen={this.state.sideDrawerOpen}
                    backdropClickHandler={this.backdropClickHandler}
                />
                <div
                    className="backdrop"
                    style={
                        !this.state.sideDrawerOpen ? { display: 'none' } : {}
                    }
                    onClick={this.backdropClickHandler}
                ></div>
                <div
                    id="sidebar-container"
                    className={this.state.sideDrawerOpen ? 'open' : ''}
                    style={
                        this.state.sideDrawerOpen
                            ? { transform: 'translateX(0)' }
                            : {}
                    }
                >
                    <div id="sidebar-icon" onClick={this.sideDrawerToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="sidebar-content">
                        <img
                            src={ProfilePic}
                            id="profile-picture"
                            alt="Profile"
                        ></img>
                        <p className="sidebar-header">Cameron Bailey</p>
                        <p className="sidebar-subheader">Web Developer</p>
                        <Nav sideDrawerToggle={this.sideDrawerToggle} />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
