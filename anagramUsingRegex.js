let str1 = "a";

let str2 = "ab";

function anagarm(str1, str2) {
  let iteration = str1.length > str2.length ? str1 : str2
  for (let elem of iteration) {
    let re = new RegExp(`${elem}`, "g");
    let firstString = str1.match(re);
    let secondString = str2.match(re);

    if (firstString?.length != secondString?.length) {
      return false;
    }
  }

  return true;
}

console.log(anagarm(str1, str2));
