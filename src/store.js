import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducers/reducers";
// import {fromJS, Map} from "immutable";

// const initialData = Map({
//     user: {},
//     language: ''
// });

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store
