const moves = [ "north", "north", "west", "west", "north", "east", "north"]





/*
function finalPosition(moves) {
  let x;
  let y;
  let position = [];
  for(var move of moves){
    if(move === "west"){
      position[0] = position[0] - 1;
    }else if(move === "east"){
      position[0] = position[0] + 1 ;
    }else if(move === "north"){
      position[1] = position [1] + 1;
    }else{
      position[1] = position [1] - 1;
    }
    console.log(moves[move]);
    return position; }

}
*/




function finalPosition(moves){
  let x = 0;
  let y = 0;
  let newArray = [];
  for(let i = 0; i < moves.length; i++){
    if(moves[i] === "west"){
      x --;
    }else if(moves[i] === "east"){
      x ++;
    }else if(moves[i] === "north"){
      y ++;
    }else{
      y --;
    } } //Make sure that x and y are ammended during the loop
  newArray.push(x);//Push the x value outside the loop into the new array
  newArray.push(y);//Push the y value outside the loop into the new array
  return newArray;
}






console.log(finalPosition(moves));
/*
"north" = [1, 0];
"east"=[0, 1];
"south" = [-1, 0];
"west" = [0, -1];
*/