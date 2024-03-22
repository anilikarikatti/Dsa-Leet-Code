let tree = [3, 9, 20, null, null, 15, 20];

let TreeNodes = [];

class BinaryTree {
  constructor(node) {
    this.name = node;
    this.left = null;
    this.right = null;
  }
}

function createTree(nodes) {
  let root = "";
  for (let i = 0; i < nodes.length; i++) {
    let elem = new BinaryTree(nodes[i]);

    TreeNodes.push(elem);
  }

  for (let i = 0; i < TreeNodes.length; i++) {
    if (TreeNodes[i].name && !TreeNodes[i].left) {
        
    }
  }
}

createTree(tree);

console.log(TreeNodes);
