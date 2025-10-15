        // Import the functions you need from the SDKs you need
        import { initializeApp } from "firebase/app";
        // import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
        apiKey: "AIzaSyABxp_00DlnOqVYCw1I9wn0p7olQQPrgZI",
        authDomain: "macpr-3fcda.firebaseapp.com",
        projectId: "macpr-3fcda",
        storageBucket: "macpr-3fcda.firebasestorage.app",
        messagingSenderId: "201187944609",
        appId: "1:201187944609:web:fcac82d0b6e457c41f68e0",
        databaseURL: "https://macpr-3fcda-default-rtdb.firebaseio.com",
        };

        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);