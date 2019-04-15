// <script src="https://www.gstatic.com/firebasejs/5.9.4/firebase.js"></script>
// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyAaiCItVDfuiS8I_Nmytsf44LJwDrRxrso",
    authDomain: "react-native-slack.firebaseapp.com",
    databaseURL: "https://react-native-slack.firebaseio.com",
    projectId: "react-native-slack",
    storageBucket: "react-native-slack.appspot.com",
    messagingSenderId: "313269807605"
};
firebase.initializeApp(config);

export default firebase;