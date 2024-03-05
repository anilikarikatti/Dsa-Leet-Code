let str1 = "anagarm";

let str2 = "aganamr";

function anagarm(str1, str2) {
  for (let elem of str1) {
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
