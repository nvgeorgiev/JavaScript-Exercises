function exactIncreasingSubsequence(arr) {
  let output = arr.reduce((acc, currElement) => {
    const lastElement = acc[acc.length - 1];

    if (currElement >= lastElement || lastElement === undefined) {
      acc.push(currElement);
    }

    return acc;
  }, []);

  return output.join('\n');
}

console.log(exactIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
