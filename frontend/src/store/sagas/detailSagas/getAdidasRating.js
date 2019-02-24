import { put } from 'redux-saga/effects';
import baseAdidasURL from '../../../utils/urls';

export default function* getAdidasProductDetail(action) {
	try {
		const json = yield fetch(`${baseAdidasURL}/models/${action.name}/ratings`, {
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			}
		}).then((response) => response.json());
	
		yield put({ type: 'ADIDAS_RATING_RECEIVED', json });
	
	} catch (err) {
		console.log(err);
	}
}
