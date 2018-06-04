import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import './stylesheets/main.scss';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";
import {Provider} from "react-redux";
import store from "./store";

firebase.initializeApp({
  apiKey: "AIzaSyCgUkvVV18ibP0YcCu0HC_Bna8Tk0cK_Uw",
  authDomain: "tfgapp-337f7.firebaseapp.com",
  databaseURL: "https://tfgapp-337f7.firebaseio.com",
  // projectId: "tfgapp-337f7",
  storageBucket: "tfgapp-337f7.appspot.com",
  messagingSenderId: "535350102945"
});

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
registerServiceWorker();
