function building(input){
let floorNum=Number(input[0]);
let roomsNum=Number(input[1]);
let rooms="";
for(let i=floorNum;i>=1;i--){
    for(let j=0;j<roomsNum;j++){
let currentFlloor="";
    if(i===floorNum){
 currentFlloor="L"
    }else if (i%2===0){
    currentFlloor="O"
    }else if(i%2!==0){
    currentFlloor="A";
    }
    if(j===roomsNum-1){
        rooms+=`${currentFlloor}${i}${j}`;
    }else{
        rooms+=`${currentFlloor}${i}${j} `;
    }
}
console.log(rooms);
rooms="";
}
}
building(["6","4"]);
