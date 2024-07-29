import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPUsBn3N1Pe3B8q_r5DKvJUWpL7l8lVuk",
  authDomain: "greydoncat.firebaseapp.com",
  projectId: "greydoncat",
  storageBucket: "greydoncat.appspot.com",
  messagingSenderId: "153097792433",
  appId: "1:153097792433:web:eff52ff6a8947cd22aab90"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
export { ref, listAll, getDownloadURL };
