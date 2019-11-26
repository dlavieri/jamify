import React from 'react';
import Sidebar from '../Sidebars/Sidebar.jsx';
import './AppLayout.css';

export default function AppLayout (props) {
    return (
        <div>
            <Sidebar/>
            <div className="app-layout">
            {props.children}
            </div>
        </div>
    )   
};