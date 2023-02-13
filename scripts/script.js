/*
  Script for auto typing
*/

var word = "Hello Hi!";
var i = 0; //index
//console.log(word[i])
const interval = setInterval(welcome, 300);
function welcome() {
    if (i == word.length) {
        clearInterval(interval);
    }
    else {
        document.getElementById("start").innerHTML = document.getElementById("start").innerHTML + word[i];
    }
    i = i + 1;
    Typeit(); // call 2nd one
}

var i1 = 0 //index 2
var phrase = "A web and an game developer with an eye for detail and a passion for coding. Possesses a unique blend of creativity, humour and technical experience in creating and designing websites and games."
function Typeit(){
   const interval2 = setInterval(type,300);
   
   function type(){

    document.getElementById("details").innerHTML += phrase[i1];
    i1 = i1+1;
    if(i1>=185){ //enter length/2 approx
        clearInterval(interval2);
        
    }
   }
}

