import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBmwIa1Fnl5sQejOeG3jaxoF0zfJAiig_E",
   authDomain: "campjalisco.firebaseapp.com",
   databaseURL: "https://campjalisco.firebaseio.com",
   projectId: "campjalisco",
   storageBucket: "campjalisco.appspot.com",
   messagingSenderId: "1079502664926"
 };
 firebase.initializeApp(config);

 export default firebase;
