import React, { Component } from "react";
import '../styles/style.css';

class ExperienceFormatted extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */


    render () {
        const {expForms} = this.props;
        let experienceFormsArray = Object.values(expForms);
        return (
            <ul class="section">
                {experienceFormsArray.map((experienceForm, index) => (
                    <li key={index}>{experienceForm.positionInput}, {experienceForm.companyInput}, {experienceForm.cityInput}, {experienceForm.fromInput} - {experienceForm.toInput}</li>
                ))}
            </ul>
        )
    }
}

export default ExperienceFormatted;