import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt1Sku4-IuFgiVsR1-RUbc7CSPRRJEigA",
  authDomain: "fcm-demo-c029f.firebaseapp.com",
  projectId: "fcm-demo-c029f",
  storageBucket: "fcm-demo-c029f.appspot.com",
  messagingSenderId: "831627027983",
  appId: "1:831627027983:web:9b921346865f86f29ce57a",
  measurementId: "G-01YJCXRRCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);