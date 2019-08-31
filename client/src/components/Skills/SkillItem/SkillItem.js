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
            break;
        case 'FaCode':
            return <FaCode />;
            break;
        case 'FaCss3':
            return <FaCss3 />;
            break;
        case 'FaReact':
            return <FaReact />;
            break;
        case 'FaDatabase':
            return <FaDatabase />;
            break;
        case 'FaGitAlt':
            return <FaGitAlt />;
            break;
        case 'FaServer':
            return <FaServer />;
            break;
        case 'FaLayerGroup':
            return <FaLayerGroup />;
            break;
        case 'FaTasks':
            return <FaTasks />;
            break;
        case 'FaChalkboardTeacher':
            return <FaChalkboardTeacher />;
            break;
        case 'FaAddressCard':
            return <FaAddressCard />;
            break;
        default:
            return <FaCode />;
            break;
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
