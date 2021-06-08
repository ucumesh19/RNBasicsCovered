import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Reducer } from './reducers/Reducer';
import DummySaga from './sagas/DummySaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    Reducer,
    applyMiddleware(sagaMiddleware)
);

//run saga
sagaMiddleware.run(DummySaga);

export { store };