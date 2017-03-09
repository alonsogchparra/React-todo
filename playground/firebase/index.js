import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAFywB-SYpjvNTrLW5nOazHHjB4QCmAhew",
    authDomain: "mead-todo-app-5a1f8.firebaseapp.com",
    databaseURL: "https://mead-todo-app-5a1f8.firebaseio.com",
    storageBucket: "mead-todo-app-5a1f8.appspot.com",
    messagingSenderId: "421619802613"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Alonso',
        age: 27
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
   console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
   text: 'todo 1'
});

todosRef.push({
    text: 'todo 2'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//     text: 'Walk the dog!'
// });
// console.log('Todo id:' + newNoteRef.key);



// firebaseRef.child('user').on('value', (snapshot) =>{
//     console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
//
// firebaseRef.child('app').update({name: 'Something Else'});

//FIREBASE DON'T USE ARRAYS [] IT WORKS WITH OBJECT {}