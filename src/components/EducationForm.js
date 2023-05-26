import React from 'react';
import '../styles/style.css';

const EducationForm = (props) => {
    return (
        <form id={props.formID}>
            <input type="text" id="universityInput" placeholder="University name" onChange={props.onInputChange}/><br />
            <input type="text" id="degreeInput" placeholder="Degree" onChange={props.onInputChange}/><br />
            <input type="date" id="fromInput" placeholder="From" onChange={props.onInputChange}/><br />
            <input type="date" id="toInput" placeholder="To" onChange={props.onInputChange}/><br />
            <button type="button" onClick={props.onDeleteButtonClicked}>Delete</button>
        </form>
    )
};

export default EducationForm;