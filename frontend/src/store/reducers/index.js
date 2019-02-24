import { combineReducers } from 'redux-immutable';
import searchbar from './searchbar'
import details from './details'

const mainReducer = combineReducers({
    searchbar,
    details
});

export default mainReducer;