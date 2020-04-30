function solve(...params) {
  let numberOfSteps = params[0];
  let footLengthInMeters = params[1];
  let speedMS = params[2] / 3.6;

  let distanceInMeters = numberOfSteps * footLengthInMeters;
  let restTimeInSeconds = Math.floor(distanceInMeters / 500);
  let timeInSeconds = distanceInMeters / speedMS;

  let timeHr = Math.floor(timeInSeconds / 3600);
  let timeMin = Math.floor(timeInSeconds / 60);
  let timeSec = Math.round(timeInSeconds - timeMin * 60);

  console.log(
    (timeHr < 10 ? '0' : '') +
      timeHr +
      ':' +
      (timeMin + restTimeInSeconds < 10 ? '0' : '') +
      (timeMin + restTimeInSeconds) +
      ':' +
      (timeSec < 10 ? '0' : '') +
      timeSec
  );
}

solve(4000, 0.6, 5);

// Input:
// test0 = 4000, 0.60, 5
// test1 = 2564, 0.70, 5.5

// Expected output:
// test0 = 00:32:48
// test1 = 00:22:35
