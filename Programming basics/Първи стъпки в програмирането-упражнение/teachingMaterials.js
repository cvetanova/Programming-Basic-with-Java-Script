function teachingMaterials(input){
let priceChimical=5.80;
let priceMarker=7.20;
let pricePreparation=1.20;
let numChimicals=Number(input[0]);
let numMarker=Number(input[1]);
let leterPreparation=Number(input[2]);
let discountPercent=Number(input[3])/100;
let priceChimicals=priceChimical*numChimicals;
let priceMarkers=priceMarker*numMarker;
let pricePreparations=pricePreparation*leterPreparation;
let discount=(priceChimicals+priceMarkers+pricePreparations)*discountPercent;
let totalSum=(priceChimicals+priceMarkers+pricePreparations)-discount;
console.log(totalSum);
}
teachingMaterials(["2 ","3 ","4 ","25 "])