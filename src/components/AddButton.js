import React from 'react';
import '../styles/style.css';

const AddButton = (props) => {
    return (
        <button type="button" className="addBtn" onClick={props.onButtonClicked}>
            Add
        </button>
    )
};

export default AddButton;