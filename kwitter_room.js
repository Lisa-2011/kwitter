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
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room_name - " + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML += row

      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"

}

 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html"
 }

 function logout(){
       localStorage.removeItem("room_name");
       localStorage.removeItem("user_name");
       window.location = "kwitter.html";

 }