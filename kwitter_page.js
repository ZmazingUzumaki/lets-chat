var firebaseConfig = {
    apiKey: "AIzaSyAwfCx3Bz27uTWWXsnD4rrJGFa8UqQiiX8",
    authDomain: "kwitter-d9a35.firebaseapp.com",
    databaseURL: "https://kwitter-d9a35-default-rtdb.firebaseio.com",
    projectId: "kwitter-d9a35",
    storageBucket: "kwitter-d9a35.appspot.com",
    messagingSenderId: "527244973864",
    appId: "1:527244973864:web:83fddc1751e231f11a221d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().rel(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().rel("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();