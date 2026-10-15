function graduation(input) {
    let name = input[0];
    let index = 1;
    let grade = Number(input[index]);
    let averageGrade = 0;
    let counter = 0;
    let curentClass = 1;
    while (index<input.length) {
        if (grade < 4) {
            if (counter===1) {
                console.log(`${name} has been excluded at ${curentClass} grade`);
                break;
            }
            counter++;
            index++;
            grade = Number(input[index]);
            continue;
        }
        if (counter > 0) {
            counter = 0;
        }
        averageGrade += grade;
    index++;
    if(curentClass<12){
        curentClass++;
        grade = Number(input[index]);
        }
        
    }
    if(curentClass===12 && grade>=4){
    averageGrade = averageGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);