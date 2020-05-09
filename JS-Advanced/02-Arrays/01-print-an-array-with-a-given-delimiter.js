function arrayWithDelimeter(arr) {
  let delimeter = arr.pop();
  return arr.join(delimeter);
}

console.log(
  arrayWithDelimeter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_'])
);
