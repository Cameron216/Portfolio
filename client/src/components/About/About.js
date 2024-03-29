import React from 'react';
import { Helmet } from 'react-helmet';
import { FaFileDownload } from 'react-icons/fa';

import cvDoc from './../../assets/docs/cv.pdf';

import './About.scss';

export default function About() {
    return (
        <div className="about-container">
            <Helmet>
                <title>Cameron Bailey || About</title>
            </Helmet>

            <h1 className="about-heading">About me</h1>
            <div className="about-profile">
                <p className="about-main-text">
                    I'm an experienced web developer from southeast England.
                </p>
                <p>
                    I started coding when I took a home learning degree in
                    Computing and IT and since then I haven't stopped. For the
                    last 3 years since completing my degree I have been working
                    as a developer for an insurance company where I maintain and
                    build travel and home insurance applications for a range of
                    clients.
                </p>
                <p>
                    I started out as a front-end developer but over the last
                    year I have moved into a developer role where I have taken
                    on more of a fullstack position. The main tech stack at my
                    current company is HTML, CSS, Javascript, C# and ASP.NET. I
                    also have exposure to React.js and Node.js, which I have
                    been using in my spare time.
                </p>
                <p>
                    My experience as a developer has seen me work on the full
                    life cycle of various projects, from structuring and
                    documenting initial requirements, to designing, developing,
                    testing and implementing strategic solutions. I have a
                    passion for developing clean and robust solutions using
                    latest technologies and I'm always looking to learn
                    something new.
                </p>
                <p>
                    When I'm not working I can be found spending time with the
                    family or working out in the gym. I am also an MMO lover but
                    I don't get too much time for that these days.
                </p>
            </div>
            <div className="cv-container">
                <a href={cvDoc} target="_blank" rel="noopener noreferrer">
                    <FaFileDownload />
                    <p>View my CV</p>
                </a>
            </div>
        </div>
    );
}
