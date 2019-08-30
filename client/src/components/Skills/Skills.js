import React from 'react';

import './Skills.scss';
import SkillItem from './SkillItem/SkillItem';

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>My core skills</h1>

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
                <SkillItem
                    icon="FaCode"
                    name="ASP.NET"
                    description="C#, Core, Api"
                />
                <SkillItem
                    icon="FaCode"
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
                    icon="FaGitAlt"
                    name="Agile"
                    description="Scrum, Kanban"
                />
                <SkillItem
                    icon="FaGitAlt"
                    name="Work managetment"
                    description="Jira"
                />
            </div>
        </div>
    );
};

export default Skills;
