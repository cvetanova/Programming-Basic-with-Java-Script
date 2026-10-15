function lunchBreak(input) {
    let nameSerial = input[0];
    let durationEpisod = Number(input[1]);
    let durationBreak = Number(input[2]);
    let timeLunch = durationBreak / 8;
    let timeRelax = durationBreak / 4;
    let timeSerial=durationBreak-(timeLunch+timeRelax);
    let time = Math.ceil(Math.abs(durationEpisod -timeSerial));
    if (timeSerial >= durationEpisod) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${time} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${time} more minutes.`);
    }
}
lunchBreak((["Teen Wolf","48","60"]))