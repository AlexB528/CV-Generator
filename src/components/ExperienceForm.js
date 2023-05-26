import React from 'react';
import '../styles/style.css';

const ExperienceForm = (props) => {
    return (
        <form id={props.formID}>
            <input type="text" id="positionInput" placeholder="Position" onChange={props.onInputChange} /><br />
            <input type="text" id="companyInput" placeholder="Company" onChange={props.onInputChange}/><br />
            <input type="text" id="cityInput" placeholder="City" onChange={props.onInputChange}/><br />
            <input type="date" id="fromInput" placeholder="From" onChange={props.onInputChange}/><br />
            <input type="date" id="toInput" placeholder="To" onChange={props.onInputChange}/><br />
            <button type="button" onClick={props.onDeleteButtonClicked}>Delete</button>
        </form>
    )
};

export default ExperienceForm;