function projet(input){
let name=input[0];
let numProjet=Number(input[1]);
let hours=3*numProjet;
console.log(`The architect ${name} will need ${hours} hours to complete ${numProjet} project/s.`);
}
projet(["George","4"])