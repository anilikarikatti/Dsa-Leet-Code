// selection sort means to find the minimum value and push into sorted array

let arr = [12, 34, 13, 45, 6, 54, 67];

// normal way

let sorted = [];

let findMinimum = (arr) => {
  let minimum;
  for (let a of arr) {
    if (minimum && a < minimum) {
      minimum = a;
    }
    if (!minimum) {
      minimum = a;
    }
  }
  return minimum;
};

const deleteElementFromArr = (arr, value) => {
  arr = arr.filter((elem) => elem != value);
  return arr;
};

while (arr.length > 0) {
  //   let minimumValue = Math.min(...arr);

  let minimumValue = findMinimum(arr);
  console.log(minimumValue);
  sorted.push(minimumValue);
  let resp = deleteElementFromArr(arr, minimumValue);
  arr = resp;
}

console.log(sorted);
