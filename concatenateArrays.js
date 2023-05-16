/*Objectives
Define function called concat
Takes input of two arrays
Combine the two arrays together
output new completed arary
*/


function concat(arrayOne, arrayTwo){
  //THIS COMBINED ARRAY NEEDS TO DECLARED INSIDE FUNCTION
  let combinedArray = [];
  
  
  //This for loop push the first array elements into the new array
  for(let i = 0; i < arrayOne.length; i++){
    combinedArray.push(arrayOne[i]);
  }
  
  //This for loop push the second array elements into the new array
  for(let i = 0; i < arrayTwo.length; i++){
    combinedArray.push(arrayTwo[i]);
  }

//This is a conditional to ensure that if both arrays have no values the new array will have no values
  if(arrayOne.length === 0 && arrayTwo.length === 0){
    combinedArray = [];
    return combinedArray;
  }

  //This is a conditional to ensure that if array one has no elements the new array will only have the second arrays elements
  if(arrayOne.length === 0 && arrayTwo.length !== 0){
    combinedArray = arrayTwo;
  }
  
  //This is a conditional to ensure that if array two has no elements the new array will only have the first arrays elements
  else if(arrayOne.length !== 0 && arrayTwo.length === 0){
    combinedArray = arrayOne;
  }

  return combinedArray;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);