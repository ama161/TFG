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

export function login(email, password) {
    console.log(email);
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
                dispatch(login(result));
                console.log('todo bien')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + " " + errorMessage);
        });
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

export function register(email, password) {
    return (dispatch) => {
        console.log(email)
        console.log(password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('todo bien')
                verification();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + " " + errorMessage);
            });
    }
}

export function onAuthState(){
    return (dispatch => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("usuario activo");
                console.log(user);
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              // ...
            } else {
                console.log("no usuario activo");
                
              // User is signed out.
              // ...
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