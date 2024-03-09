// let str = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

passwordCount = 4;

// let strLength = str.length;

// let createRandomNumber = () => {
//   let num = Math.floor(Math.random() * strLength);

//   return num;
// };

let createRandomNumber = () => {
  let num = Math.floor(Math.random() * 256);

  return num;
};

let passwordArray = [];

for (let i = 0; i < passwordCount; i++) {
  let number = createRandomNumber();
  passwordArray[i] = number;
}

// console.log(passwordArray);

function createPassword(passwordArray) {
  let password = "";

  for (let num of passwordArray) {
    password += cha[num];
  }
  return password;
}

console.log(createPassword(passwordArray));
