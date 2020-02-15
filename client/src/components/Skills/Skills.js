import React from 'react';
import { Helmet } from 'react-helmet';

import './Skills.scss';
import SkillItem from './SkillItem/SkillItem';

const Skills = () => {
    return (
        <div className="skills-container">
            <Helmet>
                <title>Cameron Bailey || Skills</title>
            </Helmet>

            <h1>My core skills</h1>

            <p>
                Below are some of the main skills I've picked up over my years
                as a developer.
            </p>

            <div className="skill-item-container">
                <SkillItem
                    icon="FaHtml5"
                    name="Html5"
                    description="Sementic markup"
                />
                <SkillItem
                    icon="FaCss3"
                    name="CSS"
                    description="SASS, Bootstrap"
                />
                <SkillItem
                    icon="FaReact"
                    name="Javascript"
                    description="React.js, Node.js, JQuery"
                />
                <SkillItem
                    icon="FaDatabase"
                    name="Persistent storage"
                    description="MySQL, MongoDB"
                />
                <SkillItem
                    icon="FaCode"
                    name="ASP.NET"
                    description="C#, Core, Api"
                />
                <SkillItem
                    icon="FaLayerGroup"
                    name="Design patterns"
                    description="MVC, Functional"
                />
                <SkillItem
                    icon="FaGitAlt"
                    name="Source control"
                    description="Git, Bitbucket, GitHub"
                />
                <SkillItem
                    icon="FaServer"
                    name="Azure"
                    description="Cloud architecture"
                />
                <SkillItem
                    icon="FaAddressCard"
                    name="CMS"
                    description="Umbraco, Episever"
                />
                <SkillItem
                    icon="FaChalkboardTeacher"
                    name="Agile"
                    description="Scrum, Kanban"
                />
                <SkillItem
                    icon="FaTasks"
                    name="Work management"
                    description="Jira, Team Foundation Server"
                />
            </div>
        </div>
    );
};

export default Skills;
