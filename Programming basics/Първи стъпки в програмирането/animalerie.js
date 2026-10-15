function animalerie(input){
    let numFoodDog=Number(input[0]);
    let numFoodCat=Number(input[1]);
    let priceFoodCat=4;
    let priceFoodDog=2.50;
      priceFoodCat=priceFoodCat*numFoodCat;
      priceFoodDog=priceFoodDog*numFoodDog;
      let totalPriceFood=priceFoodCat+priceFoodDog;
    console.log(`${totalPriceFood} lv.`);
}
animalerie(["5 ","4"])