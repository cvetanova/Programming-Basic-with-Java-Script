function worldRecord(input) {
    let recordSeconds = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let timeSeconds = Number(input[2]);
    let numDelays = Math.floor(distanceMetres / 15);
    let totalSeconds = (distanceMetres * timeSeconds) + (numDelays * 12.5);
    if (totalSeconds < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`);
    } else {
        let missingSeconds = totalSeconds - recordSeconds;
        console.log(`No, he failed! He was ${missingSeconds.toFixed(2)} seconds slower.`)
    }
}
worldRecord(["10464", "1500", "20"])