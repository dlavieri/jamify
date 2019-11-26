import React from 'react';
import './playlist.css';
import Song from '../Song/song.jsx';

export default function Playlist (props) {
    return (
        <div className="playlist">
                    <h5>{props.playlistName}</h5>
                    <table className="table">
                        { props.songs.sort((a,b) => b.listens - a.listens).map((song, i) => {
                            return (
                                <Song 
                                    index={i+1}
                                    title={song.title}
                                    ranking={true}
                                    listens={song.listens} />)})
                        }   
                    </table>
                </div>
    )
}