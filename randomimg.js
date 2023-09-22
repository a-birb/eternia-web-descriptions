import { readdir } from 'node:fs';
import { readFile } from 'node:fs';

window.onload = choosePic;

function readFiles(dirname, onFileContent, onError) {
  readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

var data = {};
readFiles('images/', function(filename, content) {
  data[filename] = content;
}, function(err) {
  throw err;
});

function choosePic() {
     var randomNum = Math.floor(Math.random() * data.length);
     document.getElementById("playby").src = data[randomNum];
}