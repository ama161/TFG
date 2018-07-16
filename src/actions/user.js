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

function setDatabase(userId, data){
    firebase.database().ref('users/' + userId).set(data);
}

export function login(email, password, history) {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                dispatch(loginUser(result));
                
                if(result.emailVerified){
                    console.log('email Verified');
                }
                firebase.database().ref('/users/' + result.uid).once('value').then((snapshot)=>{
                    if(snapshot.val().role === 'admin'){
                        history.push('/homeAdmin');
                    }
                    else{
                        history.push('/homeUser');
                    }
                })
                localStorage.setItem('userRegisted', JSON.stringify(result));                
            })
            .catch((error) => {
                console.log(error);
        });
    }
}

export function logout(history) {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(result => {
                dispatch(logoutUser());
                console.log('sesion cerrada');
                history.push('/');
                let language = localStorage.language;
                localStorage.clear();
                localStorage.setItem('language', language);
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
                localStorage.setItem('userRegisted', JSON.stringify(user));
                firebase.database().ref('/users/' + user.uid).once('value').then((snapshot)=>{
                    console.log(snapshot.val());
                    localStorage.setItem('role', JSON.stringify(snapshot.val().role));
                    localStorage.setItem('username', JSON.stringify(snapshot.val().username));
                })

            } else {
                console.log("no usuario activo");
            }
          });
    })
}

export function singInWithEmailLink(href, email, password, history){
    return (dispatch => {
        // Confirm the link is a sign-in with email link.
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            
            // var email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
            }
            // The client SDK will parse the code from the link for you.
            firebase.auth().signInWithEmailLink(email, window.location.href)
            .then(function(result) {
                // Clear email from storage.
                console.log(result);
                // dispatch(register(email, password));
                // window.localStorage.removeItem('emailForSignIn');

                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
            })
            .catch(function(error) {
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
            });
        }
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