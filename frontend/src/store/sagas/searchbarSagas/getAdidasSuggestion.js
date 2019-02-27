import { put, delay } from 'redux-saga/effects';
import baseAdidasURL from '../../../utils/urls';

export default function* getAdidasSuggestion(action) {
	try {
		const json = yield fetch(`${baseAdidasURL}/search/suggestions/${action.name}`, {
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			}
		}).then((response) => response.json());

		yield delay(1000);

		yield put({ type: 'ADIDAS_SUGGESTION_DATA_RECEIVED', json });
		yield put({ type: 'CHANGE_LOADING_STATUS', bool: false });
	
		if (json.products.length === 0) {
			yield put({ type: 'SET_SEARCH_NAME', name: action.name });
			yield put({ type: 'ADIDAS_SUGGESTION_FAILED' });
		}
	} catch (err) {}
}
