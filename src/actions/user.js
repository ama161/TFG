import {UserService} from "../services/UserService";

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

function auth(user) {
    return {
        type: LOGIN,
        payload: user
    }
}

export function loginAuth() {
    return (dispatch) => {
        return UserService.auth()
            .then((data) => {
                dispatch(auth(data));
            })
            .catch((error) => {

            })
    }
}
