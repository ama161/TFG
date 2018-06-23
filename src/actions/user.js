import firebase from "firebase/index";

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

function loginUser(data) {
    return {
        type: LOGIN,
        payload: data
    }
}

function logoutUser() {
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

export function login(email, password, history) {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                dispatch(loginUser(result));
                if(result.emailVerified){
                    console.log('email Verified');
                }

                history.push('/homeUser');
            })
            .catch((error) => {
                console.log(error);
        });
    }
}

export function logout() {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(result => {
                dispatch(logoutUser());
            })
            .catch(error => console.log(error));
        }
}

export function register(email, password) {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('todo bien')
                verification();
            })
            .catch((error) => {
                console.log(error);                
            });
    }
}

export function onAuthState(){
    return (dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("usuario activo");
                console.log(user);
                return user;
            } else {
                console.log("no usuario activo");
            }
          });
    })
}

function verification() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification()
        .then(() => {
            console.log('enviando....');
        }).catch((error) => {
            console.log(error)
        });
}