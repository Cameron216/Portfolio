import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './PortfolioItem.scss';

export default class PortfolioItem extends Component {
    render() {
        return (
            <div className="portfolio-item">
                <div>
                    <img src={this.props.projects.imgLocation} alt="" />
                </div>
                <div
                    className={`portfolio-item__overlay ${
                        this.props.projects.disabled ? 'disabled' : ''
                    }`}
                >
                    <a
                        href={this.props.projects.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                </div>
                <div className="portfolio-item__name">
                    <p>{this.props.projects.title}</p>
                </div>
            </div>
        );
    }
}
