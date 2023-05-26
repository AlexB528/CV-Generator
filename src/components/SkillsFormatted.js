import React from 'react';
import '../styles/style.css';

const SkillsFormatted = (props) => {
    let skillFormsArray = Object.values(props.skillForms);
    return (
        <ul class="section">
            {skillFormsArray.map((skillForm, index) => (
                <li key={index}>{skillForm.skillInput}</li>
            ))}
        </ul>
    )
};

export default SkillsFormatted;