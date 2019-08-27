import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = (props) => (
    <div className='backdrop' style={!props.sideDrawerOpen ? {display: "none"} : {}} onClick={props.backdropClickHandler}></div>
)


// PropTypes
Backdrop.propTypes = {
    backdropClickHandler: PropTypes.func.isRequired,
    sideDrawerOpen: PropTypes.bool.isRequired
}

export default Backdrop;