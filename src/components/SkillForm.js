import React from 'react';
import '../styles/style.css';

const EducationForm = (props) => {
    return (
        <form id={props.formID}>
            <input type="text" id="skillInput" placeholder={props.skillNumber} onChange={props.onInputChange} /><br />
            <button type="button" onClick={props.onDeleteButtonClicked}>Delete</button>
        </form>
    )
};

export default EducationForm;