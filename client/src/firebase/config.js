import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYVsLpw-YiZUgFxymhgQ3sXy4nlGPqdeI",
  authDomain: "project2-b815c.firebaseapp.com",
  projectId: "project2-b815c",
  storageBucket: "project2-b815c.appspot.com",
  messagingSenderId: "295221617310",
  appId: "1:295221617310:web:94b456922b24dfe4e6d18f",
  measurementId: "G-2C85PG07YR"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

