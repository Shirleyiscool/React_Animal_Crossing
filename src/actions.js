import {CHANGE_SEARCH_FIELD, REQUEST_API_PENDING,
    REQUEST_API_SUCCESS, REQUEST_API_FAILED} from './constants'

export const setSearchField = (text) =>(
    {
        type:CHANGE_SEARCH_FIELD,
        payload: text
    }
);

export const requestAPI = () => (dispatch) => {
    dispatch({type: REQUEST_API_PENDING});
    fetch('http://acnhapi.com/v1/villagers')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_API_SUCCESS, payload: Object.values(data) }))
        .catch(error => dispatch({type: REQUEST_API_FAILED, payload: error}))

};