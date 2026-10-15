function landscaping(input){
let discountProcent=18;
let priceOneKvM=7.61;
let area=Number(input[0]);
let price=7.61*area;
let discount=(discountProcent/100)*price;
    price=price-discount;
    console.log(`The final price is: ${price} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
landscaping(["150"])