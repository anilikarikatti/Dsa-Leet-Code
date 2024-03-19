let arr = [12, 34, 13, 45, 6, 54, 67, 2];

let swap = true;
while (swap) {
  console.log(arr);
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      flag = true;
      [val1, val2] = [arr[i + 1], arr[i]];
      arr[i] = val1;
      arr[i + 1] = val2;
    }
  }
  if (!flag) {
    swap = false;
  }
}

console.log(arr);
