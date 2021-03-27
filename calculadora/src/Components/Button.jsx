/* eslint-disable import/no-anonymous-default-export */
import './Button.css';
import React from 'react';

export default props => {
    let buttonClasses = 'button ';
    buttonClasses += props.operation ? 'operation' : '';
    buttonClasses += props.double ? 'double' : '';
    buttonClasses += props.triple ? 'triple' : '';

    return (
        <button onClick={e => props.click && props.click(props.label)} className={buttonClasses}>
            {props.label}
        </button>
    );
};
