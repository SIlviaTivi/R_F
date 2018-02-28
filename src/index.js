import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyDmViTuClKCPcDjEJrxHhACZ8RFGsUf984",
    authDomain: "react-firebase-videos.firebaseapp.com",
    databaseURL: "https://react-firebase-videos.firebaseio.com",
    projectId: "react-firebase-videos",
    storageBucket: "react-firebase-videos.appspot.com",
    messagingSenderId: "325449845409"
})

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
