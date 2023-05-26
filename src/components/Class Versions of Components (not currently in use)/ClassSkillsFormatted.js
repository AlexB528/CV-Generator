import React, { Component } from "react";
import '../styles/style.css';

class SkillsFormatted extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */


    render () {
        const {skillForms} = this.props;
        let skillFormsArray = Object.values(skillForms);
        return (
            <ul class="section">
                {skillFormsArray.map((skillForm, index) => (
                    <li key={index}>{skillForm.skillInput}</li>
                ))}
            </ul>
        )
    }
}

export default SkillsFormatted;