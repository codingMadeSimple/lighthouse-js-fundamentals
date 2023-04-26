var n = 60;
while(n>=0){

  if(n===50){
    console.log("Orbiter transfers from ground to internal power");
} else console.log("T-"+ n +" seconds");

if(n===31){
  console.log("Ground launch sequencer is go for auto sequence start");
} else console.log("T-"+ n +" seconds");

if(n===16){
  console.log("Activate launch pad sound suppression system ");
} else console.log("T-"+ n +" seconds");

if(n===10){
  console.log("Activate main engine hydrogen burnoff system");
} else console.log("T-"+ n +" seconds");

if(n===6){
  console.log("Main engine start");
} else console.log("T-"+ n +" seconds");

n=n-1

}
