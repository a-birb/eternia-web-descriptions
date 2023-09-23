window.onload = choosePic;

var data = new Array("images/wolf-decap.jpg","images/wolf-demons.jpg","images/wolf-grin.jpg","images/wolf-manyheads.jpg","images/wolf-smile.jpg","images/wolf-splayed.jpg","images/wolf-sheep.jpg","images/wolf-overbearing.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * data.length);
     document.getElementById("playby").src = data[randomNum];
}