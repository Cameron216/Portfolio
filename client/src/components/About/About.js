import React from 'react';
import axios from 'axios';
import { FaFileDownload } from 'react-icons/fa';

import './About.scss';

const downloadCV = () => {
    // axios
    //     .get('/cv')
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
};

export default function About() {
    return (
        <div className="about-container">
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
                    build travel and home insurance applications.
                </p>
                <p>
                    I started out as a front-end developer but over the last
                    year I have moved into a developer role where I have taken
                    on more of a fullstack position. The main tech stack at my
                    current company is HTML, CSS, Javascript, C# and ASP.NET.
                    However in my spare time I will code using React.js and
                    Node.js and these would be my preferred tools if I was to
                    build a website outside of my current job role.
                </p>
                <p>
                    During my time as a developer I have been involved with
                    multiple projects from start to finish. This has meant I
                    have taken part in all stages of the project lifecycle. From
                    helping produce requirements, helping turn the requirements
                    into designs, turning the designs into a fully functional
                    fullstack app, supporting testing and bug fixing and then
                    deploying the app to production and maintaining it. And all
                    this while working in an incremental iterative agile way.
                </p>
                <p>
                    When I'm not working I can be found spending time with the
                    family or working out in the gym. I am also an MMO lover but
                    I don't get too much time for that these days.
                </p>
            </div>
            <div className="cv-container" onClick={downloadCV()}>
                <div className="cv">
                    <FaFileDownload />
                    <p>Download my CV (kb)</p>
                </div>
            </div>
            <a href="/static/docs/cv.pdf" target="_blank">
                cv download
            </a>
        </div>
    );
}
