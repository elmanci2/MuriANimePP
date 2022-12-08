
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import Constants from 'expo-constants'

const firebaseConfig = {
    apiKey: Constants.manifest.extra.APY_KY,
    authDomain: Constants.manifest?.extra.authDomain,
    projectId: Constants.manifest?.extra.projectId,
    storageBucket: Constants.manifest?.extra.storageBucket,
    messagingSenderId: Constants.manifest?.extra.messagingSenderId,
    appId: Constants.manifest?.extra.appId,
    measurementId: Constants.manifest?.extra.measurementId,
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth()
const analytics = getAnalytics(app);
