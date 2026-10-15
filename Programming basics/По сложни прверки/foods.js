function foods(input) {
    let foodName = input[0];
    if (foodName == "banana" || foodName == "apple" || foodName == "kiwi" || foodName == "cherry" || foodName == "lemon" || foodName == "grapes") {
        console.log("fruit");
    } else if (foodName == "tomato" || foodName == "cocumber" || foodName == "papper" || foodName == "carrot") {

    } else {
        console.log("unknown");
    }
}
foods(["banana"])