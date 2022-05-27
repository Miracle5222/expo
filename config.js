import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDQuH9AMH8qcFidXAhaaeHri8a-vJDCH4I",
    authDomain: "test-expo-c5ae4.firebaseapp.com",
    projectId: "test-expo-c5ae4",
    storageBucket: "test-expo-c5ae4.appspot.com",
    messagingSenderId: "154957298046",
    appId: "1:154957298046:web:1241eb4933f9c174a41b2f"
  };

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();