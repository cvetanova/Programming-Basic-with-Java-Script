function deliveryFood(input){
let  chiken=10.35;
let fish=12.40;
let vegeterian=8.15;
let delivery=2.50;
let numChiken=Number(input[0]);
let numFish=Number(input[1]);
let numVegeterian=Number(input[2]);
let priceChiken=chiken*numChiken;
let priceFish=fish*numFish;
let priceVegeterian=vegeterian*numVegeterian;
let dessert=(priceChiken+priceFish+priceVegeterian)*(20/100);
let totalSum=priceChiken+priceFish+priceVegeterian+delivery+dessert;
console.log(totalSum);
}
deliveryFood(["2 ","4 ","3 "])