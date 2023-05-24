import React, { Component } from "react";
import '../styles/style.css';
import {deleteForm} from './utilities.js';

class EducationForm extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */

    render () {
        const {onInputChange , formID, onDeleteButtonClicked} = this.props;
        return (
            <form id={formID}>
                <input type="text" id="universityInput" placeholder="University name" onChange={onInputChange}/><br />
                <input type="text" id="degreeInput" placeholder="Degree" onChange={onInputChange}/><br />
                <input type="date" id="fromInput" placeholder="From" onChange={onInputChange}/><br />
                <input type="date" id="toInput" placeholder="To" onChange={onInputChange}/><br />
                <button type="button" onClick={onDeleteButtonClicked}>Delete</button>
            </form>
        )
    }
}

export default EducationForm;