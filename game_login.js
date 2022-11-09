const firebaseConfig = {
  apiKey: "AIzaSyAkdjTL9e8FiAsJppy7t2xRMYYBOylAIdM",
  authDomain: "clase-102.firebaseapp.com",
  databaseURL: "https://clase-102-default-rtdb.firebaseio.com",
  projectId: "clase-102",
  storageBucket: "clase-102.appspot.com",
  messagingSenderId: "1066760509619",
  appId: "1:1066760509619:web:72932a76bf6f89ffdf38c6"
};

function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}
