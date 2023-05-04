
var sound = "";
function laugh(num) {
for (var x=0; x < num; x++) { //you can use a local variable x within for loops
sound = sound + "ha";
}
sound = sound + "!";
return sound;
}
console.log(laugh(3));



// returns the sum of two numbers
var avg = findAverage(5, 9);
function add(x, y){
  return x + y;
}

// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;

}

//Build a Triangle Function

//First Function to Make a Triangle
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length){
var triangle = "";
for(lineNumber = 1; lineNumber <= length; lineNumber ++){
  triangle += makeLine(lineNumber);
 }
 return triangle;

}

function buildTriangle(length) {
  var triangle = "";
  var lineNumber = 1;
  for(lineNumber=1; lineNumber<=length; lineNumber++){

      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

// This is the laugh function for (5-4 Udacity)
var sound = "";
var laugh = function(x){
    for (var i = 0; i < x; i ++){
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
};

console.log(laugh(10));

//Udacity 5-5 Emotions Function
emotions("happy", function laugh(x){
  var sound = "";
  for(var i = 0; i < x; i ++){
      sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
});