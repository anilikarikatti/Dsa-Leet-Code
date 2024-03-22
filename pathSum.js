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


  
  