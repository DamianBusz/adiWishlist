import { combineReducers } from 'redux-immutable';
import searchbar from './searchbar';
import details from './details';
import wishlist from './wishlist';

const mainReducer = combineReducers({
	searchbar,
	details,
	wishlist
});

export default mainReducer;
