//here we create actions
import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_MONSTERS_FAIL,
    REQUEST_MONSTERS_PENDING,
    REQUEST_MONSTERS_SUCCESS 
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestMonsters = () => (dispatch) => {
    dispatch({ type: REQUEST_MONSTERS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(monsters => dispatch({ type: REQUEST_MONSTERS_SUCCESS, payload: monsters }))
        .catch(err => dispatch({ type: REQUEST_MONSTERS_FAIL, payload: err }))
}