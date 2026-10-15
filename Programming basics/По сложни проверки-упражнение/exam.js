function exam(input) {
    let hourExam = Number(input[0]);
    let minutExam = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinut = Number(input[3]);
    let totalMinutExam = (hourExam * 60) + minutExam;
    let totalArrivalMinuts = (arrivalHour * 60) + arrivalMinut;
    let defference = Math.abs(totalMinutExam - totalArrivalMinuts);
    let hour = Math.floor(defference / 60);
    let minuts = defference % 60;
    if (totalMinutExam >= totalArrivalMinuts) {
        if (defference <= 30) {
            console.log(`On time`);
            if (defference !== 0) {
                console.log(`${minuts} minutes before the star`);
            }
        } else {
            console.log(`Early`);
            if (defference < 60) {
                console.log(`${minuts} minutes before the start`);
            } else {
                if (minuts <= 9) {
                    console.log(`${hour}:0${minuts} hours before the start`);
                } else {
                    console.log(`${hour}:${minuts} hours before the start`);
                }
            }
        }
    } else {
        console.log(`Late`);
        if (defference < 60) {
            console.log(`${minuts} minutes after the star`);
        } else {
            if (minuts <= 9) {
                console.log(`${hour}:0${minuts} hours after the star`);
            } else {
                console.log(`${hour}:${minuts} hours after the star`);
            }
        }
    }
}
exam(["10", "00", "10", "00"])