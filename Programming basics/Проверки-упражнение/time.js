function time(input){
let hour=Number(input[0]);
let minutes=Number(input[1]);
let totalTime=(hour*60)+minutes+15;
hour=Math.floor(totalTime/60);
minutes=totalTime%60;
if(minutes>59){
    minutes=minutes-59;
    hour=hour+1;
}
if(hour>23){
    hour=0;
}
if(minutes<10){
console.log(`${hour}:0${minutes}`);
}else{
   console.log(`${hour}:${minutes}`); 
}
}
time(["12","49"])