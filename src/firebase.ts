import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwm5zGuM6tfG9cOc86-13Th2f1Wx_ycDE",

  authDomain: "netflix-clone-94c72.firebaseapp.com",

  projectId: "netflix-clone-94c72",

  storageBucket: "netflix-clone-94c72.appspot.com",

  messagingSenderId: "786516169189",

  appId: "1:786516169189:web:1f17eccb216e560ed05f0c",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export default db;
