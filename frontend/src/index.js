import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas/index';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import reducer from './store/reducers/index';
const sagaMiddleware = createSagaMiddleware();
const initialState = Immutable.fromJS({});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
