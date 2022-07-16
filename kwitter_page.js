//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyC3SEKRT4Z0EOkm5Z9zfJQRZDBvj-7pa3U",
      authDomain: "kwitterwebsite-fd1f9.firebaseapp.com",
      databaseURL: "https://kwitterwebsite-fd1f9-default-rtdb.firebaseio.com",
      projectId: "kwitterwebsite-fd1f9",
      storageBucket: "kwitterwebsite-fd1f9.appspot.com",
      messagingSenderId: "1006074896769",
      appId: "1:1006074896769:web:a31cd9306321ddd5bf8880",
      measurementId: "G-5JB58M7KRW"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){

      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            like:0
      })
      
      document.getElementById("message").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();