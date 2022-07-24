import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDEsOOfgTVYWwL5CctoYpCHX06kpSA_apo",
    authDomain: "linkedin-clone-e8346.firebaseapp.com",
    projectId: "linkedin-clone-e8346",
    storageBucket: "linkedin-clone-e8346.appspot.com",
    messagingSenderId: "962855951209",
    appId: "1:962855951209:web:0659e34026ca973e8cfbf8"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db };