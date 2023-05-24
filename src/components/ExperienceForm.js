import React, { Component } from "react";
import '../styles/style.css';
import {deleteForm} from './utilities.js';

class ExperienceForm extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */

    render () {
        const {onInputChange , formID, onDeleteButtonClicked} = this.props;
        return (
            <form id={formID}>
                <input type="text" id="positionInput" placeholder="Position" onChange={onInputChange} /><br />
                <input type="text" id="companyInput" placeholder="Company" onChange={onInputChange}/><br />
                <input type="text" id="cityInput" placeholder="City" onChange={onInputChange}/><br />
                <input type="date" id="fromInput" placeholder="From" onChange={onInputChange}/><br />
                <input type="date" id="toInput" placeholder="To" onChange={onInputChange}/><br />
                <button type="button" onClick={onDeleteButtonClicked}>Delete</button>
            </form>
        )
    }
}

export default ExperienceForm;