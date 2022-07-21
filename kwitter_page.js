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

console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+ name + "<image class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like +  " onclick='updateLike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like : " + like + "</span></button><hr>"

row = name_with_tag + message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";

}

function updateLike(message_id){

      console.log("Total Clicks on Like Button" + message_id);
      button_id=message_id
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })

}