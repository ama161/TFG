import firebase from "firebase/index";

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

function login(data) {
    return {
        type: LOGIN,
        payload: data.providerData[0]
    }
}

function logout() {
    return {
        type: LOGOUT
    }
}

export function loginAuth() {
    return (dispatch) => {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
          .then(result => {
              console.log(`${result.user.email} ha iniciado sesión`);
              dispatch(login(result.user));
          })
          .catch(error =>
            console.log(error)
          )
    }
}

export function logout() {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(result => {
                dispatch(logout());
            })
            .catch(error => console.log(error));
        }
}
