/**
 * Created by parra on 3/7/17.
 */
import firebase from 'firebase';

try {

    var config = {
        apiKey: "AIzaSyAFywB-SYpjvNTrLW5nOazHHjB4QCmAhew",
        authDomain: "mead-todo-app-5a1f8.firebaseapp.com",
        databaseURL: "https://mead-todo-app-5a1f8.firebaseio.com",
        storageBucket: "mead-todo-app-5a1f8.appspot.com",
        messagingSenderId: "421619802613"
    };
    firebase.initializeApp(config);

} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;