import React from 'react';
import './signin.css';
import icon from '../../assets/icon.svg';

export default function Signin (props) {
    return (
        <div className="signin">
            <div className="branding">
                <div className="muzik-brand-icon"><img src={icon} className="muzik-icon"/></div>
                <h1 className="muzik-brand">muzik</h1>
                <form action="/login" method="POST" className="form-group login">
                    <input className="form-control" name="email" type="email" placeholder="Enter Email"></input>
                    <input className="form-control" name="password" type="password" placeholder="Password"></input>
                    <button className="btn btn-dark">Login</button>
                </form>
            </div>
        </div>
    )
}