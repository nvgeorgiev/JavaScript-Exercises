function rotateArr(arr) {
  let rotationElement = Number(arr.pop());
  let rotations = Math.floor(rotationElement % arr.length);
  for (let i = 0; i < rotations; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  return arr.join(' ');
}

console.log(rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']));
