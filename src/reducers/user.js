import {fromJS} from "immutable";
import {
    REGISTER, LOGIN, LOGOUT
} from "../actions/register";

const initialState = fromJS({
    user: {}
});

function RegisterReducer(state = initialState, {type, payload}) {
    switch (type) {
        case REGISTER:
            return state.set('user', state.get('user').set(`${payload}`, payload));
        case LOGIN:
            return;
        case LOGOUT:
            return;
        default:
            return state;
    }
}

export default RegisterReducer;

