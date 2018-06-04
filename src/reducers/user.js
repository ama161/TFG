import {fromJS} from "immutable";
import {
    REGISTER, LOGIN, LOGOUT
} from "../actions/user";

const initialState = fromJS({
    user: {}
});

function RegisterReducer(state = initialState, {type, payload}) {
    switch (type) {
        case REGISTER:
            return state;
        case LOGIN:
            return state.set('user', state.get('user').set(`${payload}`, payload));
        case LOGOUT:
            return state.set('user', fromJS({}));;
        default:
            return state;
    }
}

export default RegisterReducer;
