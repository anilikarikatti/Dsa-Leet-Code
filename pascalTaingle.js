function pascalTraingle(numberOfRows) {
  let arr = [];

  for (let i = 0; i < numberOfRows; i++) {
    let tempArr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        tempArr.push(1);
      } else {
        let val = arr[i - 1];
        let sum = val[j] + val[j - 1];
        tempArr.push(sum);
      }
    }
    arr.push(tempArr);
  }

  return arr;
}

console.log(pascalTraingle(6));
