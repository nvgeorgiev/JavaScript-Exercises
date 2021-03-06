function solve(array) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let speed = Number(array.shift());
  let area = array[0];
  let speedOverTheLimit = speed - Number(speedLimits[area]);

  if (speedOverTheLimit <= 0) {
  } else if (speedOverTheLimit <= 20) {
    console.log('speeding');
  } else if (speedOverTheLimit <= 40) {
    console.log('excessive speeding');
  } else {
    console.log('reckless driving');
  }
}

const test0 = [40, 'city'];
// Expected output: empty

const test1 = [21, 'residential'];
// Expected output: speeding

const test2 = [120, 'interstate'];
// Expected output: excessive speeding

const test3 = [200, 'motorway'];
// Expected output: reckless driving

solve(test3);
