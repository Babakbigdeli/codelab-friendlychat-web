
const config = {
  apiKey: "AIzaSyA-Qpxqy4Tj1qHuQVLTRLERLkresQ7by1g",
  authDomain: "friendlychat-ad80c.firebaseapp.com",
  projectId: "friendlychat-ad80c",
  storageBucket: "friendlychat-ad80c.appspot.com",
  messagingSenderId: "149870784128",
  appId: "1:149870784128:web:cef61c8f775a4a6bd54065",
  measurementId: "G-98EZZ7PB2F"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}