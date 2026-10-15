function aquarium(input){
let length=Number(input[0]);
let width=Number(input[1]);
let height=Number(input[2]);
let percent=Number(input[3])/100;
let volume=length*width*height;
let freeVolume=volume-(volume*percent);
let liters=freeVolume/1000;
console.log(liters);
}
aquarium(["85 ","75 ","47 ","17 "]);