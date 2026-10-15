function symvols(input) {
    let word = input[0];
    for (let i = 0; i < word.length; i++) {
        let symvol = word.charAt(i);
        console.log(symvol);
    }
}
symvols(["softuni"])