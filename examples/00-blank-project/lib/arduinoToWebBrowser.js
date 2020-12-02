var socket = io("http://localhost:3000/");

socket.on("dataFromArduino", insertText);
function insertText(data) {
  for (var i = 0; i < data.dataArduino.length; i++) {
    console.log("valeurs capteur" + i + " : " + data.dataArduino[i]);
  }
}
