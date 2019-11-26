import React from 'react';

const Button = (props) => {
    return (
        <div className="container">
            <button onClick={props.onClick}>{props.label}</button>
        </div>
        )
    }

export default Button;