function literature(input){
let numPages=Number(input[0]);
let pagesForHour=Number(input[1]);
let numDays=Number(input[2]);
let numHours=numPages/pagesForHour;
let hoursForday=numHours/numDays;
console.log(hoursForday);
}
literature(["212 ","20 ","2 "]);