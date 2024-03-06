function bestTimeToBuyAndSell(arr) {
  let maximum = 0;
  for (let i = 0; i < arr.length; i++) {
    let value = 0;
    for (let j = i; j < arr.length; j++) {
      let val = arr[j] - arr[i];
      if (val > value) {
        value = val;
      }
    }
    if (value > maximum) {
      maximum = value;
    }
  }

  return maximum;
}

console.log(bestTimeToBuyAndSell([7, 9, 5, 3, 6, 4]));
