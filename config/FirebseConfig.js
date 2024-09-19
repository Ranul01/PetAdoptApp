// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "reactnative-603c4.firebaseapp.com",
    projectId: "reactnative-603c4",
    storageBucket: "reactnative-603c4.appspot.com",
    messagingSenderId: "1019095881653",
    appId: "1:1019095881653:web:f4373d7551278bc68bebfc",
    measurementId: "G-WQ90D771L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
//export const db = firestore();
// const analytics = getAnalytics(app);