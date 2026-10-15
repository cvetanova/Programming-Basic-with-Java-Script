function clock() {
    for (let i = 0; i <= 23; i++) {
        let hour="";
        if(i<=9){
            hour=`0${i}`;
        }else{
            hour=i;
        }
        for (let j = 0; j <= 59; j++) {
            let min="";
        if(j<=9){
            min=`0${j}`;
        }else{
            min=j;
        }
            console.log(`${hour}:${min}`);
        }
    }
}
clock();