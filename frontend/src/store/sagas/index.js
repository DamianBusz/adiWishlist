import { takeLatest, all} from 'redux-saga/effects';
import getAdidasSuggestion from './searchbarSagas/getAdidasSuggestion'
import getAdidasProductDetail from './detailSagas/getAdidasProductDetail'
import getAdidasRating from './detailSagas/getAdidasRating'
import addProductToWishlist from './detailSagas/addProductToWishlist'

function* actionWatcher() {
	yield takeLatest('GET_ADIDAS_SUGGESTIONS', getAdidasSuggestion);
	yield takeLatest('GET_ADIDAS_PRODUCT_DETAIL', getAdidasProductDetail);
	yield takeLatest('GET_ADIDAS_RATING', getAdidasRating)
	yield takeLatest('ADD_PRODUCT_TO_WISHLIST', addProductToWishlist)
}

export default function* rootSaga() {
	yield all([ actionWatcher() ]);
}