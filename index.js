// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD3L6fr1i1_Md4fxJQAPmS60lzr7OsuJho",
    authDomain: "jaltrack.firebaseapp.com",
    databaseURL: "https://jaltrack.firebaseio.com",
    projectId: "jaltrack",
    storageBucket: "jaltrack.appspot.com",
    messagingSenderId: "663656952298",
    appId: "1:663656952298:web:28493e2bcfb60053"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var lsRef = firebase.database().ref('ls');

lsRef.on('value', function (snapshot) {
    // This snapshot returns the value of total litres/seconds automatically
    console.log(snapshot.val());
    $('.ls').text(snapshot.val());
});

var totalRef = firebase.database().ref('total');
totalRef.on('value', function (snapshot) {
    // This snapshot returns the value of total litres automatically

    console.log(snapshot.val());
    $('.total').text(snapshot.val());


});
