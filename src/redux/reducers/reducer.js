import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_MONSTERS_FAIL,
    REQUEST_MONSTERS_PENDING,
    REQUEST_MONSTERS_SUCCESS 
} from '../constants'


const initialStateSearch = {
    searchField: ''
}

export const setSearchField = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state , searchField: action.payload}
        default:
            return state;    
    }
}

const initialStateRobots = {
    isPending: false,
    monsters: [],
    error: '',
}
export const requestMonsters = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case REQUEST_MONSTERS_PENDING:
            return {...state, isPending: true}
        case REQUEST_MONSTERS_SUCCESS:
            return {...state, monsters: action.payload, isPending: false}
        case REQUEST_MONSTERS_FAIL:
            return {...state, error: action.payload, isPending: false}
        default: 
            return state;    
    }
}