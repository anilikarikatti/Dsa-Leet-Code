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
  for (let elem of str) {
    if (elem.charCodeAt() >= 97 && elem.charCodeAt() <= 122) {
      newString += elem;
    }
  }
  return newString;
};
let str = "A man , a plan , a canal , : dPanama";

console.log(palindromeForAlphanumeric(str));
