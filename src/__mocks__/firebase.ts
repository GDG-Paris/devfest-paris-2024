import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'API_KEY',
  authDomain: 'PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://PROJECT_ID.firebaseio.com',
  projectId: 'PROJECT_ID',
  storageBucket: 'PROJECT_ID.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
  measurementId: 'G-MEASUREMENT_ID',
});

// export const firebaseApp = initializeApp({
//   apiKey: "AIzaSyASUpEeCtavfHPoXLS-yOpEKhiV3UcIWLc",
//   authDomain: "devfest-paris-2024.firebaseapp.com",
//   databaseURL: "https://devfest-paris-2024-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "devfest-paris-2024",
//   storageBucket: "devfest-paris-2024.appspot.com",
//   messagingSenderId: "317768888724",
//   appId: "1:317768888724:web:cda0f6a48e982b3af6df81",
//   measurementId: "G-2ZPQ3PTSRR"
// })
export const db = getFirestore(firebaseApp);
