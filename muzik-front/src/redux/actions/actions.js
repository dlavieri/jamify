// AUDIO CONTROLS
export const PLAY_SONG = "SELECT_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RESUME_SONG = "RESUME_SONG";

export function playSong(song) {
    return {
        type: PLAY_SONG,
        song: song
    }
}

export function pauseSong(time) {
    return {
        type: PAUSE_SONG,
        pausedTime: time
    }
}

export function resumeSong() {
    return {
        type: RESUME_SONG
    }
}


// FETCH HOME PAGE DATA
export const FETCH_MOODS_PENDING = "FETCH_MOODS_PENDING";
export const FETCH_MOODS_SUCCESS = "FETCH_MOODS_SUCCESS";
export const FETCH_MOODS_ERROR = "FETCH_MOODS_ERROR";

export function fetchMoodsPending() {
    return {
        type: FETCH_MOODS_PENDING
    }
};

export function fetchMoodsSuccess(moods) {
    return {
        type: FETCH_MOODS_SUCCESS,
        moods: moods
    }
};

export function fetchMoodsError(err) {
    return {
        type: FETCH_MOODS_ERROR,
        error: err
    }
};

// FETCH LIKED SONGS PLAYLIST
export const FETCH_LIKED_SONGS_PENDING = "FETCH_LIKED_SONGS_PENDING";
export const FETCH_LIKED_SONGS_SUCCESS = "FETCH_LIKED_SONGS_SUCCESS";
export const FETCH_LIKED_SONGS_ERROR = "FETCH_LIKED_SONGS_ERROR";

export function fetchLikedPending() {
    return {
        type: FETCH_LIKED_SONGS_PENDING
    }
};

export function fetchLikedSuccess(songs) {
    return {
        type: FETCH_LIKED_SONGS_SUCCESS,
        songs: songs
    }
};

export function fetchLikedError(err) {
    return {
        type: FETCH_LIKED_SONGS_ERROR,
        error: err
    }
};

// FETCH RECENT SONGS PLAYLIST
export const FETCH_RECENT_SONGS_PENDING = "FETCH_RECENT_SONGS_PENDING";
export const FETCH_RECENT_SONGS_SUCCESS = "FETCH_RECENT_SONGS_SUCCESS";
export const FETCH_RECENT_SONGS_ERROR = "FETCH_RECENT_SONGS_ERROR";

export function fetchRecentPending() {
    return {
        type: FETCH_RECENT_SONGS_PENDING
    }
};

export function fetchRecentSuccess(songs) {
    return {
        type: FETCH_RECENT_SONGS_SUCCESS,
        songs: songs
    }
};

export function fetchRecentError(err) {
    return {
        type: FETCH_RECENT_SONGS_ERROR,
        error: err
    }
};

// FETCH PAGE FOR SPECIFIC MOOD
export const FETCH_MOOD_PENDING = "FETCH_MOOD_PENDING";
export const FETCH_MOOD_SUCCESS = "FETCH_MOOD_SUCCESS";
export const FETCH_MOOD_ERROR = "FETCH_MOOD_ERROR";

export function fetchMoodPending() {
    return {
        type: FETCH_MOOD_PENDING
    }
};

export function fetchMoodSuccess(mood, songs) {
    return {
        type: FETCH_MOOD_SUCCESS,
        mood: mood,
        songs: songs
    }
};

export function fetchMoodError(err) {
    return {
        type: FETCH_MOOD_ERROR,
        error: err
    }
};

