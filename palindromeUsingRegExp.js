function palindromeForAlphanumeric(str) {
  let newString = restructureString(str);
  let revString = reverseString(newString);
  console.log(revString, newString);
  if (newString == revString) {
    return true;
  }
  return false;
}

let reverseString = (str) => {
  let revString = str.split("")?.reverse()?.join("");

  return revString;
};

let restructureString = (str) => {
  str = str.toLowerCase();
  let newString = "";
  let regExp = /[a-z]/;
  for (let elem of str) {
    let res = regExp.test(elem);
    if (res) newString += elem;
  }
  return newString;
};
let str = "A man , a plan , a canal , : Panama";

console.log(palindromeForAlphanumeric(str));
