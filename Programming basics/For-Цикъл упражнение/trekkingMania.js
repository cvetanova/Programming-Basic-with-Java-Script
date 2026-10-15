function trekingMania(input) {
    let totalNumGroups = Number(input[0]);
    let numPeopleMusala = 0;
    let numPeopleMontBlanc = 0;
    let numPeopleKilimanjaro = 0;
    let numPeopleK2 = 0;
    let numPeopleEverest = 0;
    let totalNumPeople = 0;
    for (let i = 1; i <= totalNumGroups; i++) {
        let currentNumPeople = Number(input[i]);
        totalNumPeople += currentNumPeople;
        if (currentNumPeople <= 5) {
            numPeopleMusala += currentNumPeople;
        } else if (currentNumPeople > 5 && currentNumPeople <= 12) {
            numPeopleMontBlanc += currentNumPeople;
        } else if (currentNumPeople > 12 && currentNumPeople <= 25) {
            numPeopleKilimanjaro += currentNumPeople;
        } else if (currentNumPeople > 25 && currentNumPeople <= 40) {
            numPeopleK2 += currentNumPeople;
        } else if (currentNumPeople > 40) {
            numPeopleEverest += currentNumPeople;
        }
    }
    console.log(`${((numPeopleMusala / totalNumPeople) * 100).toFixed(2)}%`);
    console.log(`${((numPeopleMontBlanc / totalNumPeople) * 100).toFixed(2)}%`);
    console.log(`${((numPeopleKilimanjaro / totalNumPeople) * 100).toFixed(2)}%`);
    console.log(`${((numPeopleK2 / totalNumPeople) * 100).toFixed(2)}%`);
    console.log(`${((numPeopleEverest / totalNumPeople) * 100).toFixed(2)}%`);
}
trekingMania(["10","10","5","1","100","12","26", "17", "37", "40", "78"]);