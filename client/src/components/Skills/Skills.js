import React from 'react';

import './Skills.scss';
import SkillItem from './SkillItem/SkillItem';

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Some of the skills i have</h1>

            <p>MySQL</p>
            <p>ASP.NET, ASP.NET Core</p>
            <p>Git, Bitbucket, Github</p>
            <p>Agile (Scrum & Kanban)</p>
            <p>Azure (cloud architecture)</p>
            <p>Jira (Work management)</p>
            <p></p>
            <p></p>
            <p></p>
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
                    name="MySQL"
                    description="Persistent storage"
                />
                <SkillItem icon="FaHtml5" name="Html5" description="Code" />
                <SkillItem icon="FaHtml5" name="Html5" description="Code" />
            </div>
        </div>
    );
};

export default Skills;
