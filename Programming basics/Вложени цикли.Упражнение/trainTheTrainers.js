function trinTheTrainers(input){
let n=Number(input[0]);
let index=1;
let comand=input[index];
let evaluation=0;
let totalEvaluation=0;
let counter=0;
let presentationName="";
while(comand!=="Finish"){
presentationName+=comand;
 for(let i=1 ;i<=n;i++){
 index++;
 let curentEvaluation=Number(input[index]);
 evaluation+=curentEvaluation;
 totalEvaluation+=curentEvaluation;
 counter++;
 }
 console.log(`${presentationName} - ${(evaluation/n).toFixed(2)}.`);
presentationName="";
evaluation=0;
index++;
comand=input[index];
}
console.log(`Student's final assessment is ${(totalEvaluation/counter).toFixed(2)}`);
}
trinTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);