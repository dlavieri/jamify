import React, { Component } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying.jsx';
import './Sidebar.css';

export default class Sidebar extends Component {

    state = {
        mobile: false
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions)
    }

    updateDimensions = () => {
        let windowWidth = window.innerWidth;
        
        if (windowWidth < 768 ) {
            this.setState({
                mobile: true
            })
        }
        if (windowWidth > 768 ) {
            this.setState({
                mobile: false
            });
        }
    }



    render() {
        if (this.state.mobile) {
            return (<div>
                <CurrentlyPlaying />
                </div>)
        } else {
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

                    <div className="current-details">
                        <div>
                            <h4 className="song-title">thank u, next</h4>
                            <div className="song-love" onClick={this.loveSong}></div>
                        </div>
                            <p className="song-artist">Ariana Grande</p>
                        </div>
                    </div>
                <CurrentlyPlaying/>
            </div>
        )}
    }
}