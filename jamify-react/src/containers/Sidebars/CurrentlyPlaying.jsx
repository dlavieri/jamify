import React, { Component } from 'react';
import AudioPlayer from '../../components/AudioPlayer/audio.jsx';

export default class CurrentlyPlaying extends Component {

    render() {
        return (
            <div className="currentlyPlaying">
                <div className="current-details">
                    <div>
                        <h4 className="song-title">thank u, next</h4>
                        <div className="song-love"></div>
                    </div>
                    <p className="song-artist">Ariana Grande</p>
                </div>
                    <AudioPlayer />
            </div>
        )
    }
}


