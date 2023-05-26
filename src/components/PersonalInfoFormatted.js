import React from 'react';
import '../styles/style.css';

const PersonalInfoFormatted = (props) => {
    let personalInfoFormsArray = Object.values(props.personalInfoForms);
    return (
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
};

export default PersonalInfoFormatted;