import React, { Component } from "react";
import '../styles/style.css';
import {deleteForm} from './utilities.js';

class SkillForm extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */

    render () {
        const {onInputChange , formID, skillNumber, onDeleteButtonClicked} = this.props;
        return (
            <form id={formID}>
                <input type="text" id="skillInput" placeholder={skillNumber} onChange={onInputChange} /><br />
                <button type="button" onClick={onDeleteButtonClicked}>Delete</button>
            </form>
        )
    }
}

export default SkillForm;