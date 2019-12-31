import React from 'react';
import './header.css';

const Header = props => {
    if (!props.user) {
        return null
    }

    return (
        <header className="app-header">
            <div>Hello, {props.user}</div>
        </header>
    )
}

export default Header;