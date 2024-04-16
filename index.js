import {Tree} from "./tree.js";


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };


function createRandomArray(n){
    const array = []
    for (let i=0; i<n; i++){
        array[i] = Math.floor(Math.random()*101)
        console.log(array)
    }
    return array
}

function addNumbers(n){
    const array = createRandomArray(n)
    for (let i=0; i<n ; i++){
        array.insert(array[i])
    }
}

const tree = new Tree(createRandomArray(7)); // Create a binary search tree from an array of 7 random numbers.

console.log(tree)
console.log(prettyPrint(tree.root))
console.log(tree.inorder())
