import React, { Component } from "react";
import '../styles/style.css';

class AddButton extends Component {
    constructor(props) {
        super (props)
    }

    /* Javascript functions can be written here */

    render () {
        const {onButtonClicked} = this.props;
        return (
            <button type="button" className="addBtn" onClick={onButtonClicked}>
                Add
            </button>
        )
    }
}

export default AddButton;