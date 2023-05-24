import React, { Component } from "react";
import '../styles/style.css';

class PersonalInfoForm extends Component {
    constructor(props) {
        super (props)
    }


    /* Javascript functions can be written here */

    render () {
        const {onInputChange} = this.props;
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
                        onChange={onInputChange}
                    /><br />
                    <input
                        type="text"
                        id="lastNameInput"
                        placeholder="Last Name"
                        onChange={onInputChange}
                    /><br />
                    <input
                        type="email"
                        id="emailInput"
                        placeholder="Email Address"
                        onChange={onInputChange}
                    /><br />
                    <input
                        type="tel"
                        id="phoneInput"
                        placeholder="Phone Number"
                        onChange={onInputChange}
                    /><br />
                    <textarea
                        id="addressInput"
                        placeholder="Address"
                        onChange={onInputChange}
                    ></textarea><br />
                    {/* <button type="submit">
                        Submit
                    </button> */}
                </form>

            </div>
        )
    }
}

export default PersonalInfoForm;