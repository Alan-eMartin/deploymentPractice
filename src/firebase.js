
import firebase from 'firebase/app'
import 'firebase/database'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBPuWWVfA0NThgpSltustP0WAvEdcYYw",
  authDomain: "thebookshelf-de2fa.firebaseapp.com",
  databaseURL: "https://thebookshelf-de2fa.firebaseio.com",
  projectId: "thebookshelf-de2fa",
  storageBucket: "thebookshelf-de2fa.appspot.com",
  messagingSenderId: "74952590677",
  appId: "1:74952590677:web:766830e9d1bc2638859bdc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase;