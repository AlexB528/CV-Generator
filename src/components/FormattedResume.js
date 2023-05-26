import React from 'react';
import '../styles/styleCV.css';

const FormattedResume = (props) => {
    return (
        <div className="formattedResumeContainer">
            <div className="section personalInfo">
                {props.personalInfo}
            </div>
            <div>
                <h2>Description</h2>
                {props.descriptionInfo}
            </div>
            <div className="section">
                <h2>Work Experience</h2>
                {props.experienceInfo}
            </div>
            <div className="section">
                <h2>Education</h2>
                {props.educationInfo}
            </div>
            <div className="section">
                <h2>Skills</h2>
                {props.skillsInfo}
            </div>
        </div>
    )
};

export default FormattedResume;