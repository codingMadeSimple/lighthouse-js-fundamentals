
/*
Objectives
Function that takes an array and a value X
Returns the index of the last time the value occurs in array
If the value does not occur return -1

*/


var inputArray = [];

//This is the full function
function lastIndexOf(inputArray, index) {
  //This will return -1 if the array is empty
  if(inputArray.length === 0){
    return -1;
  }
//This checks if the index value is in the array starting from the right side and returns [i] if it is found
  for(let i = inputArray.length; i > 0; i--){
    if(inputArray[i] === index){
      return i;
    }
  }
  //This checks if the index value is in the array starting from the left side and returns the [i] of where the value is
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] === index){
      return i;
    }
  }
  //This is a weird loop that checks if the index is in the array
  //I can move this loop to the top to include most of the function
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray.includes(index)){
    }else{
      return -1;

    }
  }
}
 




  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
  console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
  console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
  console.log(lastIndexOf([], 3), "=?", -1);