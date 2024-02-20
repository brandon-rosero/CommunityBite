import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA3goRjxtNrvj8uvydNWfyunhccxpZkGSA",
    authDomain: "communitybite-3ca4b.firebaseapp.com",
    projectId: "communitybite-3ca4b",
    storageBucket: "communitybite-3ca4b.appspot.com",
    messagingSenderId: "1098440562837",
    appId: "1:1098440562837:web:6efb7b03484dea85c7639c",
    measurementId: "G-LSKKEQNJQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Export database
export { db }

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
