import React, { Component } from "react";
import '../styles/styleCV.css';

class FormattedResume extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */
    fillExpSection (forms) {

    }
    render () {
        const {experienceInfo, educationInfo, personalInfo, descriptionInfo, skillsInfo} = this.props;
        return (
            <div className="formattedResumeContainer">
                <div className="section personalInfo">
                    {personalInfo}
                </div>
                <div>
                    <h2>Description</h2>
                    {descriptionInfo}
                </div>
                <div className="section">
                    <h2>Work Experience</h2>
                    {experienceInfo}
                </div>
                <div className="section">
                    <h2>Education</h2>
                    {educationInfo}
                </div>
                <div className="section">
                    <h2>Skills</h2>
                    {skillsInfo}
                </div>

            </div>
        )
    }
}

export default FormattedResume;