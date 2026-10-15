function shop(input){
let excursionPrice=Number(input[0]);
let numPuzzles=Number(input[1]);
let numDolls=Number(input[2]);
let numBear=Number(input[3]);
let numMinions=Number(input[4]);
let numTrucks=Number(input[5]);
let totalNumber=numPuzzles+numDolls+numBear+numMinions+numTrucks;
let pricePuzzles=numPuzzles*2.60;
let priceDolls=numDolls*3;
let priceBear=numBear*4.10;
let priceMinions=numMinions*8.20;
let priceTrucks=numTrucks*2;
let totalSum=priceBear+priceDolls+priceMinions+pricePuzzles+priceTrucks;
if(totalNumber>=50){
totalSum=totalSum-(totalSum*0.25);
}
totalSum=totalSum-(totalSum*0.10);
let muney=Math.abs(excursionPrice-totalSum);
if (totalSum>=excursionPrice) {
    console.log(`Yes! ${muney.toFixed(2)} lv left.`);
}else{
    console.log(`Not enough money! ${muney.toFixed(2)} lv needed.`);
}
}
shop(["40.8","20","25","30","50","10"]); 