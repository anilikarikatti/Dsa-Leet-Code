// submitted

function duplicate(arr) {
  let obj = {};

  for (let a of arr) {
    if (obj[a]) {
      obj[a] += 1;
    } else {
      obj[a] = 1;
    }
  }

  let values = Object.values(obj);

  for (let val of values) {
    if (val >= 2) {
      return true;
    }
  }
  return false;
}

let arr = [1, 2, 3, 4, 6];

console.log(duplicate(arr));
