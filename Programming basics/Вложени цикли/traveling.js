function traveling(input) {
    let comand = input[0];
    let minbudjet = Number(input[1]);
    let index = 2;
    let savings = 0;
    while (comand !== "End") {
        while (savings < minbudjet) {
             let save = Number(input[index]);
            savings += save;
           index++;
        }
        console.log(`Going to ${comand}!`);
        savings=0;
        comand=input[index];
        index++;
        if(comand!=="End"){
         minbudjet=Number(input[index]);
         index++
        }
}
            }
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);