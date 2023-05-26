import React from 'react';
import '../styles/style.css';

const ExperienceFormatted = (props) => {
    let experienceFormsArray = Object.values(props.expForms);
    return (
        <ul class="section">
            {experienceFormsArray.map((experienceForm, index) => (
                <li key={index}>{experienceForm.positionInput}, {experienceForm.companyInput}, {experienceForm.cityInput}, {experienceForm.fromInput} - {experienceForm.toInput}</li>
            ))}
        </ul>
    )
};

export default ExperienceFormatted;