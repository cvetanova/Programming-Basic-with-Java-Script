function salary(input){
let numTab=Number(input[0]);
let muney=Number(input[1]);
for(let i=2;i<input.length;i++){
let curentTab=input[i];
switch(curentTab){
    case "Facebook":muney-=150;break;
    case "Instagram":muney-=100;break;
    case "Reddit":muney-=50;break;
    default:break;
}
if(muney<=0){
    console.log(`You have lost your salary.`);
    break;
}
}
if(muney>0){
    console.log(muney);
}
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);