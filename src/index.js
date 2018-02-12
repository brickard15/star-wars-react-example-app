import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import CombinedReducers from "./reducers/CombinedReducers";
import createSagaMiddleware from'redux-saga';
import RootSaga from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  CombinedReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
