function repainted(input) {
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let quantityNylon = Number(input[0]);
    let quantityPaint = Number(input[1]);
    let quntityThinner = Number(input[2]);
    let hours = Number(input[3]);
    let bagPrice = 0.40;
    quantityPaint = quantityPaint + (quantityPaint * 0.10);
    quantityNylon = quantityNylon + 2;
    let totalPriceNylon = nylonPrice * quantityNylon;
    let totalPricePaint = paintPrice * quantityPaint;
    let totalPriceThinner = thinnerPrice * quntityThinner;
    let sumMaterials = totalPriceNylon + totalPricePaint + totalPriceThinner + bagPrice;
    let payForHour = sumMaterials * 0.30;
    let totalPay = hours * payForHour;
    let totalsum = sumMaterials + totalPay;
    console.log(totalsum);
}
repainted(["10 ", "11 ", "4 ", "8 "]);