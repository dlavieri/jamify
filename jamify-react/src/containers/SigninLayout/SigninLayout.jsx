import React from 'react';
import './SigninLayout.css';

export default function SigninLayout (props) {
    return (
        <div>
            <div className="signin-layout">
            {props.children}
            </div>
        </div>
    )   
};