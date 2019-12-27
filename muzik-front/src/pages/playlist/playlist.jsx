import React, { Component } from 'react';
import './playlist.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMood from '../../redux/actions/fetchMood';

import SongList from '../../components/songlist/songlist';
import Container from '../../components/container/container';

class PlaylistPage extends Component {

    componentDidMount = () => {
        const { mood, fetchMood } = this.props;
        if (mood) {
            const moodId = this.props.match.params.moodid;
            fetchMood(moodId);
        }
    }

    render() {
        const { currentPlaylist, songs } = this.props;
        return (
            <Container>
                <div className="playlist">
                    <h4>{currentPlaylist}</h4>
                    <SongList songs={songs} />
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPlaylist: state.currentPlaylist,
        songs: state.songs
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchMood: fetchMood
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);