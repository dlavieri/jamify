import { fetchMoodPending, fetchMoodSuccess, fetchMoodError } from './actions';
import axios from 'axios';

function fetchMood(moodId) {
    return dispatch => {
        dispatch(fetchMoodPending());
        axios.get(`http://localhost:8080/moods/${moodId}`)
        .then(res => {
            if (res.error) {
                throw(res.error)
            }
            dispatch(fetchMoodSuccess(res.data.name, res.data.songs));
            return res.data;
        })
        .catch(err => {
            dispatch(fetchMoodError(err));
        });
    }
}

export default fetchMood;