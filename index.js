
// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABmZHcuSlcjFqgr91HmjvEmqIcY-qzrP0",
  authDomain: "http-5214-f324c.firebaseapp.com",
  databaseURL: "https://http-5214-f324c-default-rtdb.firebaseio.com/",
  projectId: "http-5214-f324c",
  storageBucket: "http-5214-f324c.appspot.com",
  messagingSenderId: "127717890192",
  appId: "1:127717890192:web:3870f222cd7377604ea015",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase();

// Fetch messages
const messages = ref(database, "/messages");

// On data event
onValue(
  messages,
  (snapshot) => {
    // Create a reference to the ul element
    const ul = document.getElementById("messages");

    // Empty the ul emelemt
    ul.replaceChildren();

    // Loop through messages
    snapshot.forEach((childSnapshot) => {
      // Get key and children
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      console.log(childKey);
      console.log(childData);

      // Add message to list
      const text = document.createTextNode(childData.message);
      const li = document.createElement("li");
      li.appendChild(text);
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);
