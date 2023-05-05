//Last attempt
function howManyHundreds(bottles){
  var division = bottles / 100
  return Math.floor(division); //Math.floor() will return rounds down to the lowest integer
}

howManyHundreds(150);

/*

First Attempt

if(bottles < 100){
  console.log(0);
}else if(bottles >= 100 && bottles < 200){
  console.log(1);
}else if(bottles >= 200 && bottles < 200){
  console.log(1);
}else if(bottles >= 300 && bottles < 200){
  console.log(1);
}else if(bottles >= 400 && bottles < 200){
  console.log(1);
}else if(bottles >= 500 && bottles < 200){
  console.log(1);
}else if(bottles >= 600 && bottles < 200){
  console.log(1);
}else if(bottles >= 700 && bottles < 200){
  console.log(1);
}else if(bottles >= 800 && bottles < 200){
  console.log(1);
}else if(bottles >= 900 && bottles < 200){
  console.log(1);
*/


/*
Second Attempt

function howManyHundreds(bottles){
  var container;
  for(i=0; i <=1000; ){

  }
}
*/