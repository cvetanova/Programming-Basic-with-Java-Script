function basketball(input){
    let annualFee=Number(input[0]);
    let sneakers=annualFee-(annualFee*0.40);
    let team=sneakers-(sneakers*0.20);
    let ball=team*(1/4);
    let accessories=ball*(1/5);
   let totalSum=annualFee+sneakers+team+ball+accessories; 
console.log(totalSum);
}
basketball(["365 "])