import React from 'react';
import '../styles/style.css';

const EducationFormatted = (props) => {
    let educationFormsArray = Object.values(props.eduForms);
    return (
        <ul class="section">
            {educationFormsArray.map((educationForm, index) => (
                <li key={index}>{educationForm.universityInput}, {educationForm.degreeInput}, {educationForm.fromInput} - {educationForm.toInput}</li>
            ))}
        </ul>
    )
};

export default EducationFormatted;