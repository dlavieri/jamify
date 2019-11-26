import React, { Component } from 'react';
import Song from '../../components/Song/song.jsx';
import Playlist from '../../components/Playlist/playlist.jsx';
import './Profile.css';

const topSongs = [
    {
        title: "7 rings",
        listens: 94123
    },
    {
        title: "thank u, next",
        listens: 95323
    },
    {
        title: "God is a woman",
        listens: 72003
    },
    {
        title: "Dangerous Woman",
        listens: 100230
    },
    {
        title: "One Last Time",
        listens: 120533
    }
]

export default class Profile extends Component {

    
    render() {
        return (
            <main className="profile-layout">
                <header>
                    <h1 className="profile-name">Ariana Grande</h1>
                    <div className="artst-options">
                        <button className="btn btn-light">Play</button>
                        <button className="btn btn-light follow">Follow</button>
                    </div>
                </header>
                
                <Playlist
                    playlistName="Most Popular"
                    songs={topSongs}/>
            </main>
        )
    }
}