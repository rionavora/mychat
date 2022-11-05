function addUser() {
    user_name = document.getElementById("user_name").value ;
    room_name = document.getElementById("room_name").value ;
    localStorage.setItem("user_name" , user_name);
    localStorage.setItem("room_name" , room_name);
    window.location="chat.html";
}