import firebase from "firebase/index";

export class User {
    auth(){
        
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
.then(result => {
    console.log(`${result.user.email} ha iniciado sesión`);
    })
    .catch(error => console.log(`Error ${error.code} ${error.description}`));
}