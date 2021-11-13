import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
        console.log(firebaseConfig)

   return initializeApp(firebaseConfig);
}

export default initializeFirebase;
