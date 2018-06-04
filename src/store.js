import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducers/reducers";
import {fromJS, Map} from "immutable";

const root = document.getElementById('root');
const dataset = root.dataset;

console.log(dataset);
const initialData = Map({
    user: {},
});

const store = createStore(
    reducer,
    initialData,
    applyMiddleware(thunk),
);

export default store
