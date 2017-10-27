const firebase = require('firebase');
require("firebase/firestore");

let app = firebase.initializeApp({
  apiKey: "AIzaSyBYZt8kTPsmv5GT_-WUCFWiiI_Xtut7rQY",
  authDomain: "question-period-2fc8e.firebaseapp.com",
  projectId: "question-period-2fc8e",
});

let db = app.firestore();

module.exports = db;
