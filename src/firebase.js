// src/firebase.js



import { initializeApp } from 'firebase/app';
 import { getMessaging } from 'firebase/messaging';



 const firebaseConfig = {
    apiKey: "AIzaSyDt1Sku4-IuFgiVsR1-RUbc7CSPRRJEigA",
    authDomain: "fcm-demo-c029f.firebaseapp.com",
    projectId: "fcm-demo-c029f",
    storageBucket: "fcm-demo-c029f.appspot.com",
    messagingSenderId: "831627027983",
    appId: "1:831627027983:web:9b921346865f86f29ce57a",
    measurementId: "G-01YJCXRRCR"
  };

  export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

//