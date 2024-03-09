function twoSum(arr, target) {
  let values = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        values.push([i, j]);
      }
    }
  }
  return values;
}
// let arr = [2, 11, 7, 15];
let arr = [3, 2, 4];

let arrays = twoSum(arr, 5);

console.log(arrays);
