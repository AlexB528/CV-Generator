import React from 'react';
import '../styles/style.css';

const PersonalInfoForm = (props) => {
    return (
        <div class="wrapper">
            <div class="title">
                Personal Information
            </div>
            <form id="personalInfo">
                <input
                    type="text"
                    id="firstNameInput"
                    placeholder="First Name"
                    onChange={props.onInputChange}
                /><br />
                <input
                    type="text"
                    id="lastNameInput"
                    placeholder="Last Name"
                    onChange={props.onInputChange}
                /><br />
                <input
                    type="email"
                    id="emailInput"
                    placeholder="Email Address"
                    onChange={props.onInputChange}
                /><br />
                <input
                    type="tel"
                    id="phoneInput"
                    placeholder="Phone Number"
                    onChange={props.onInputChange}
                /><br />
                <textarea
                    id="addressInput"
                    placeholder="Address"
                    onChange={props.onInputChange}
                ></textarea><br />
            </form>
        </div>
        )
};

export default PersonalInfoForm;