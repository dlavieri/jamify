import { fetchMoodsPending, fetchMoodsSuccess, fetchMoodsError } from './actions';
import axios from 'axios';

function fetchMoods() {
    return dispatch => {
        dispatch(fetchMoodsPending());
        axios.get('http://localhost:8080/get-home-moods')
        .then(res => {
            if (res.error) {
                throw(res.error)
            }
            dispatch(fetchMoodsSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(fetchMoodsError(err));
        });
    }
};

export default fetchMoods;