function library(input) {
    let loveBook = input[0];
    let numBook = 0;
    let index = 1;
    let comand = input[index];
    while (comand !== "No More Books") {
        if (comand === loveBook) {
            console.log(`You checked ${numBook} books and found it`);
            break;
        }
        numBook++;
        index++
        comand = input[index];
    }
    if (comand !== loveBook) {
        console.log(`The book you search is not here`);
        console.log(`You checked ${numBook} books.`);
    }
}
library(["Troy", "Stronger", "Life Style", "Troy"]);