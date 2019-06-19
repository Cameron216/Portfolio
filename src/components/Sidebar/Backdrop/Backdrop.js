import React from 'react';

const Backdrop = (props) => (
    <div className='backdrop' style={!props.sideDrawerOpen ? {display: "none"} : {}} onClick={props.backdropClickHandler}></div>
)

export default Backdrop;