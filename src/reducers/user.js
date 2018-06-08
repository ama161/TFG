import {fromJS} from "immutable";
import {
    REGISTER, LOGIN, LOGOUT
} from "../actions/user";

const initialState = fromJS({
    email: '',
});

function user(state = initialState, {type, payload}) {
    console.log(payload);
    switch (type) {
        case REGISTER:
            return state;
        case LOGIN:
            return state.set('user', state['email'].set(`${payload.email}`, payload.email));
        case LOGOUT:
            return state.set('user', fromJS({}));;
        default:
            return state;
    }
}

export default user;
