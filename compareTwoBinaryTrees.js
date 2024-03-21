function CompareTwoBinaryTree(tree1, tree2) {
  let comparision = tree1?.map((elem, index) => {
    if (tree1[index] == tree2[index]) {
      return true;
    } else {
      return false;
    }
  });

  //   console.log(comparision);
  for (let result of comparision) {
    if (result == false) {
      return false;
    }
  }
  return true;
}

let tree1 = [1, 2, 3];
let tree2 = [1, 2, 3];

console.log(CompareTwoBinaryTree(tree1, tree2));
