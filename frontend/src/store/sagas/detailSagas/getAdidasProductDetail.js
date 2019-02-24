import { put } from 'redux-saga/effects';
import baseAdidasURL from '../../../utils/urls';

export default function* getAdidasProductDetail(action) {
	try {
		const json = yield fetch(`${baseAdidasURL}/products/${action.name}`, {
			mode: 'cors',
			headers: {
				Accept: 'application/json'
			}
		}).then((response) => response.json());

		yield put({ type: 'ADIDAS_PRODUCT_DETAIL_DATA_RECEIVED', json });
		yield put({ type: 'GET_ADIDAS_RATING', name: json.model_number });
	} catch (err) {
		console.log(err);
	}
}
