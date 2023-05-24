import React, { Component } from "react";
import '../styles/style.css';

class ListItem extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */


    render () {
        const {expForms} = this.props;
        let experienceFormsArray = Object.values(expForms);
        return (
            <div class="section">
                <ul>
                    {experienceFormsArray.forEach(experienceForms => {
                        <li>{experienceForms.positionInput}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ListItem;