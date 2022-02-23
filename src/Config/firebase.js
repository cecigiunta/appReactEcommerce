import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAXsAV9gGXJxOI3dx2C_9oidbqKsJM_YD4",
    authDomain: "proyecto1-6411e.firebaseapp.com",
    projectId: "proyecto1-6411e",
    storageBucket: "proyecto1-6411e.appspot.com",
    messagingSenderId: "668115047608",
    appId: "1:668115047608:web:7cde429a121b0031cd104d",
    measurementId: "G-K9SGL2ZT3Y"
  };
  
firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth= firebase.auth()

export default firebase;