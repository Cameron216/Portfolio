import React, { Component } from 'react';

import './PortfolioItem.scss';

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="portfolio-item">
                <div>
                    <img src={this.props.projects.imgLocation} alt="" />
                </div>
                <div></div>
            </div>
        );
    }
}
