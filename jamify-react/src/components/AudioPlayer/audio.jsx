import React, { Component } from 'react';
import './audio.css';

export default class AudioPlayer extends Component {

    state = {
        isPlaying: false,
    }

    playToggle = () => {
        const player = document.getElementById("audioPlayer");
        if (this.state.isPlaying) {
            player.pause();
        };
        player.play();
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }));

    }

    skipForward = () => {

    }

    skipBack = () => {

    }

    mouseMove = (e) => {
        e.preventDefault();
        const timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
        const handleLeft = e.pageX - this.timeline.offsetLeft;
        if (handleLeft >= 0 && handleLeft <=timelineWidth) {
            this.handle.style.marginLeft = handleLeft + "px";
            this.progress.style.width = handleLeft + "px";
        }
        if (handleLeft < 0) {
            this.handle.style.marginLeft = "0px";
            this.progress.style.width = "0px";
        }
        if (handleLeft > timelineWidth) {
            this.handle.style.marginLeft =  timelineWidth + "px";
            this.progress.style.width = timelineWidth + "px";
        }
    }

    mouseUp = () => {
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("mouseup", this.mouseUp)
    }

    mouseDown = () => {
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("mouseup", this.mouseUp);
    }

    click = (position) => {

    }


    render() {
        return (
            <div className="playback">
                <div className="audioplayer">
                    <div className="playback-controls">
                        <i className="fas fa-random"></i>
                        <i className="fas fa-backward"></i>
                        <div className="play__border">
                            <i onClick={this.playToggle}
                                className={this.state.isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
                        </div>
                        <i className="fas fa-forward"></i>
                        <i className="fas fa-redo-alt"></i>
                    </div>
                    <div id="timeline" class="song-timeline" onClick={this.mouseMove} ref={timeline => this.timeline = timeline}>
                        <div className="song-progress" id="progress" ref={progress => this.progress = progress}>
                            <div id="handle" onMouseDown={this.mouseDown} ref={handle => this.handle = handle}></div>
                        </div>
                    </div>
                    <audio id="audioPlayer">
                        <source src="#" />
                    </audio>
                    </div>
                <div className="volume-controls">
                    <i className="fas fa-volume-down"/>
                </div>
            </div>                
        )
    }
}