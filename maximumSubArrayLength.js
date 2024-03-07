let arr = [5, 4, -1, 7, 8];

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maximumSubArrayLength(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    let str = "";
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      str += arr[j];
      sum += arr[j];
      count[str] = sum;
    }
  }

  console.log(count);
  let values = Object.values(count);
  return Math.max(...values);
}

console.log(maximumSubArrayLength(arr));
