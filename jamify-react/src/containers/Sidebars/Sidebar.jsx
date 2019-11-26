import React, { Component } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying.jsx';
import './Sidebar.css';

export default class Sidebar extends Component {

    render() {
        return (
            <div className="App-fixed-layout">
                <div className="Sidebar">
                    <div className="sidebar-menu">
                        <div>
                            <i className="fas fa-home"></i>
                            Home
                        </div>
                        <div>
                            <i className="fas fa-music"></i>
                            Library
                        </div>
                        <div>
                            <i className="fas fa-user"></i>
                            Profile
                        </div>
                    </div>

                    <div className="sidebar-menu playlists-menu">
                        <div>Loved Songs</div>
                        <div>Recently Played</div>
                        <div>+ New Playlist</div>
                    </div>

                    <div className="sidebar-currentlyPlaying">
                        <img src="http://cdn-resources.crowdcat.co/media/30cc404c-5798-447c-a0cd-4e5382c67e4a.jpg" alt="thank u next"/>
                    </div>
                </div>
                <CurrentlyPlaying />
            </div>
        )
    }
}