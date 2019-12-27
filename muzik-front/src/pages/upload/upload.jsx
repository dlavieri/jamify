import React, { Component } from 'react';
import './upload.css';
import axios from 'axios';


class UploadPage extends Component {

    state = {
        mp3: null,
        mp3Path: null,
        songName: null,
        mood: 'joy',
    }

    onBlur = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { mp3, mp3Path, songName, mood } = this.state;

        axios.post('http://localhost:8080/add-music', {mp3, mp3Path, songName, mood})
        .then(res => {
            document.getElementById("mp3FormInput").value = '';
            document.getElementById("mp3PathFormInput").value = '';
            document.getElementById("songNameFormInput").value = '';
            this.setState({
                mp3: null,
                mp3Path: null,
                songName: null,
            })
        })
        .catch(err => console.log(err));
    }


    render() {
    return (
        <div className="upload-page">
            <h5>Add a new song</h5>
            <form className="form-group">
                <input type="file" id="mp3FormInput" className="form-control" name="mp3" onBlur={this.onBlur}></input>
                <input type="text" id="mp3PathFormInput" className="form-control" name="mp3Path" placeholder="mp3 Path" onBlur={this.onBlur}></input>
                <input type="text" id="songNameFormInput" className="form-control" name="songName" placeholder="Song Name" onBlur={this.onBlur}></input>
                <select className="form-control" name="mood" onChange={this.onBlur}>
                    <option value="joy">Joy</option>
                    <option value="sad">Sad</option>
                    <option value="rage">Angry</option>
                    <option value="power">Epic</option>
                </select>

                <button className="btn btn-light" onClick={this.handleSubmit}>Add Song</button>
            </form>
        </div>
    )}
}

export default UploadPage;