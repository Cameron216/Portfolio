import React from 'react';
import {
    FaHtml5,
    FaCode,
    FaCss3,
    FaReact,
    FaDatabase,
    FaGitAlt,
    FaServer,
    FaLayerGroup,
    FaTasks,
    FaChalkboardTeacher,
    FaAddressCard
} from 'react-icons/fa';

import './SkillItem.scss';

const iconSelect = iconName => {
    switch (iconName) {
        case 'FaHtml5':
            return <FaHtml5 />;
        case 'FaCode':
            return <FaCode />;
        case 'FaCss3':
            return <FaCss3 />;
        case 'FaReact':
            return <FaReact />;
        case 'FaDatabase':
            return <FaDatabase />;
        case 'FaGitAlt':
            return <FaGitAlt />;
        case 'FaServer':
            return <FaServer />;
        case 'FaLayerGroup':
            return <FaLayerGroup />;
        case 'FaTasks':
            return <FaTasks />;
        case 'FaChalkboardTeacher':
            return <FaChalkboardTeacher />;
        case 'FaAddressCard':
            return <FaAddressCard />;
        default:
            return <FaCode />;
    }
};

const SkillItem = ({ icon, name, description }) => {
    return (
        <div className="skill-item">
            <div className="skill-item__icon">{iconSelect(icon)}</div>
            <p className="skill-item__name">{name}</p>
            <p className="skill-item__description">{description}</p>
        </div>
    );
};

export default SkillItem;
