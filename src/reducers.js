import {CHANGE_SEARCH_FIELD, REQUEST_API_PENDING,
    REQUEST_API_SUCCESS, REQUEST_API_FAILED} from './constants'

const initialStateSearch = {
    searchField : ''
};

export const searchVillagers = (state=initialStateSearch, action={}) =>{
    switch (action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateAPI = {
    isPending: false,
    data: [],
    error: ''
}

export const requestVillagers = (state = initialStateAPI, action={}) =>{
    switch (action.type){
        case REQUEST_API_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_API_SUCCESS:
            return Object.assign({}, state, {data: action.payload, isPending: false});
        case REQUEST_API_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}
