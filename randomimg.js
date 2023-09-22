window.onload = choosePic;
const fs = require('fs');

var myPix = fs.readdirSync("images/");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}