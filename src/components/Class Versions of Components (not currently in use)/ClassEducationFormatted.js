import React, { Component } from "react";
import '../styles/style.css';

class EducationFormatted extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */


    render () {
        const {eduForms} = this.props;
        let educationFormsArray = Object.values(eduForms);
        return (
            <ul class="section">
                {educationFormsArray.map((educationForm, index) => (
                    <li key={index}>{educationForm.universityInput}, {educationForm.degreeInput}, {educationForm.fromInput} - {educationForm.toInput}</li>
                ))}
            </ul>
        )
    }
}

export default EducationFormatted;