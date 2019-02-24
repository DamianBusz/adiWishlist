import { put } from 'redux-saga/effects';
import baseAdidasURL from '../../../utils/urls';

export default function* getAdidasProductDetail(action) {
	try {
		const json = yield fetch(`/api/wishlist/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(action.json)
		}).then((response) => console.log(response));
	
		console.log('added')
	
	} catch (err) {
		console.log(err);
		console.log('failed')
	}
}
