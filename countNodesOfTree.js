class Tree {
  constructor(node) {
    this.node = node;
    this.left = null;
    this.right = null;
  }
}

let root = new Tree(5);

let node1 = new Tree(4);
let node2 = new Tree(8);
let node3 = new Tree(11);
let node4 = new Tree(13);
let node5 = new Tree(4);
let node6 = new Tree(7);
let node7 = new Tree(2);
let node8 = new Tree(1);
let node9 = new Tree(4);

root.left = node1;
root.right = node2;

node1.left = node3;
// node1.right = node4;

node3.left = node6;
node3.right = node7;

node2.left = node4;
node2.right = node5;

node5.right = node8;

// console.log(root);

// let count = 0;

// function countNodes(root) {
//   if (root.node) {
//     count++;
//   }
//   if (root.left) {
//     countNodes(root.left);
//   }
//   if (root.right) {
//     countNodes(root.right);
//   }
// }

// countNodes(root);

// console.log(count);

// tree to array

let arr = [];
function TreeToArray(root) {
  if (root.node) {
    // console.log(root);
    arr.push(root.node);
  }
  if (root.left) {
    TreeToArray(root.left);
  } else {
    arr.push(null);
  }
  if (root.right) {
    TreeToArray(root.right);
  } else {
    arr.push(null);
  }
}

TreeToArray(root);

// console.log(arr);

function ArrayToTree(arr) {
  for (let i = 0; i < arr.length; ) {
    if (arr[i] != null) {
      let str = "";
      for (let j = i + i + 1; j < i + i + 3 && j < arr.length; j++) {
        str += " " + arr[j];
        i++;
      }
      console.log(arr[i], "i ", str);
    } else {
      let val = arr.splice(i, 1);
      console.log(val, arr);
      
    }
  }
}

let arr1 = [5, 4, 11, 7, null, null, 2, 1, null, 100];
ArrayToTree(arr1);
