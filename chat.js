const firebaseConfig = {
    apiKey: "AIzaSyBX3OLN9P8Cq_EyGtUFKvfQp08vMCIt1rQ",
    authDomain: "kwitter-3c72c.firebaseapp.com",
    databaseURL: "https://kwitter-3c72c-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c72c",
    storageBucket: "kwitter-3c72c.appspot.com",
    messagingSenderId: "361056303774",
    appId: "1:361056303774:web:8df7c59f1f373f917dd98f"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
   function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,

    });
    document.getElementById("msg").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData
    name = message_data['name'];
    message = message_data['message'];

    name_with_tag = "<h4> "+name+" :"+message+" </h4>";
    row=name_with_tag+"<hr>";
    document.getElementById("output").innerHTML += row;
    //End code
  } }); }); }
  getData();