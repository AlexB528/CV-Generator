import React, { Component } from "react";
import '../styles/style.css';

class PersonalInformationFormatted extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */


    render () {
        const {personalInfoForms} = this.props;
        let personalInfoFormsArray = Object.values(personalInfoForms);
        // let personalInformationFormsArray = Object.values(personalInformationForms);
        return (
            // <ul class="section">
            //     <li>{personalInformationForm.firstNameInput}, {personalInformationForm.lastNameInput}, {personalInformationForm.emailInput}, {personalInformationForm.phoneInput}, {personalInformationForm.addressInput}</li>
            // </ul>

            <div>
                {personalInfoFormsArray.map((personalInfoForm, index) => (
                    <ul class="section" key={index}>
                        <li class="name"> {personalInfoForm.firstNameInput} {personalInfoForm.lastNameInput}</li>
                        <li>{personalInfoForm.emailInput}</li>
                        <li>{personalInfoForm.phoneInput}</li>
                        <li>{personalInfoForm.addressInput}</li>
                    </ul>
                ))}
            </div>
        )
    }
}

export default PersonalInformationFormatted;