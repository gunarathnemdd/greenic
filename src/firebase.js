import fire from 'firebase'

var config = {
    apiKey: "AIzaSyBLawn_98CDwzUY6CleUIKQZ4XElnb6yQs",
    authDomain: "greeniclk.firebaseapp.com",
    databaseURL: "https://greeniclk.firebaseio.com",
    projectId: "greeniclk",
    storageBucket: "greeniclk.appspot.com",
    messagingSenderId: "662784904139"
};
var firebase = fire.initializeApp(config);

export default firebase;