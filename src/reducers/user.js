import {fromJS} from "immutable";
import {
    REGISTER, LOGIN, LOGOUT
} from "../actions/user";

const initialState = fromJS({
    user: {},
});

function user(state = initialState, {type, payload}) {
    console.log(payload);
    switch (type) {
        case REGISTER:
            return state;
        case LOGIN:
            console.log(payload);
            return state.set('user', fromJS(payload));
        case LOGOUT:
            return state.set('user', fromJS({}));;
        default:
            return state;
    }
}

export default user;
