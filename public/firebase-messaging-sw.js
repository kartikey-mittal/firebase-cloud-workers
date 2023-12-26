// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDt1Sku4-IuFgiVsR1-RUbc7CSPRRJEigA",
    authDomain: "fcm-demo-c029f.firebaseapp.com",
    projectId: "fcm-demo-c029f",
    storageBucket: "fcm-demo-c029f.appspot.com",
    messagingSenderId: "831627027983",
    appId: "1:831627027983:web:9b921346865f86f29ce57a",
    measurementId: "G-01YJCXRRCR"
  };

  firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});