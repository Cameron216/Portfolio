import React from 'react';

import './Portfolio.scss';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import Projects from './projects';

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h1>My work</h1>
            <p>Below are some of the projects that I have been a part of</p>

            <div className="portfolio-items-container">
                {Projects.workProjects.map((project, index) => (
                    <PortfolioItem projects={project} key={index} />
                ))}
            </div>

            {/* 
            <h1>Personal projects</h1>

            <div className="portfolio-items-container">
                {Projects.personalProjects.map((project, index) => (
                    <PortfolioItem projects={project} key={index} />
                ))}
            </div>
            */}
        </div>
    );
}
