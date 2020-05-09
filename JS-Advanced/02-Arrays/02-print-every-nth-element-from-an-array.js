function everyNthElement(arr) {
  let step = Number(arr.pop());
  const resultArr = [];
  for (let i = 0; i < arr.length; i += step) {
    if (i < arr.length) {
      resultArr.push(arr[i]);
    }
  }

  return resultArr.join('\n');
}

console.log(everyNthElement(['5', '20', '31', '4', '20', '2']));
