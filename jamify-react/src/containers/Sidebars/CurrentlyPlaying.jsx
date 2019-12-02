import React, { Component } from 'react';
import AudioPlayer from '../../components/AudioPlayer/audio.jsx';

export default class CurrentlyPlaying extends Component {

    loveSong = (e) => {
        e.stopPropagation();
        e.target.classList.toggle("__loved-active");
    }

    render() {
        return (
            <div className="currentlyPlaying">
                    <AudioPlayer />
            </div>
        )
    }
}


