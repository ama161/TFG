import {fromJS} from "immutable";
import {
    UPDATE
} from "../actions/language";

const initialState = fromJS({
    language: 0,
});

function user(state = initialState, {type, payload}) {
    switch (type) {
        case UPDATE:
            return state.set('language', payload);
        default:
            return state;
    }
}

export default user;
