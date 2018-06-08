import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducers/reducers";
import {fromJS, Map} from "immutable";

const root = document.getElementById('root');
const dataset = root.dataset;

const initialData = Map({
    user: {},
    language: ''
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store
