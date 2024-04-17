import {Node} from "./node.js";

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
        this.levelOrderTransversed = [];
        this.inorderTransversed = [];
        this.preorderTransversed = [];
        this.postorderTransversed = []
    }

    buildTree(array) {
        const sortArr = this.sortArray(array)
        const uniqueValuesArray = this.removeDuplicates(sortArr)
        const n = uniqueValuesArray.length;
        const root = this.sortedArrayToBST(uniqueValuesArray, 0, n-1)
        return root        
    }

    sortedArrayToBST(arr, start, end) {
        if (start > end) {
          return null;
        }
        const mid = parseInt((start + end) / 2, 10);
        const node = new Node(arr[mid]);
        node.left = this.sortedArrayToBST(arr, start, mid - 1);
        node.right = this.sortedArrayToBST(arr, mid + 1, end);
        return node;
      }

    sortArray(array) {
        const sortedArray = array.sort((a, b) => a - b)
        return sortedArray
    }

    removeDuplicates(array) {
        const filteredArray = array.filter((item, index) => array.indexOf(item) === index)
        return filteredArray;
    }

    insert(data, root = this.root) {
        if (node == null){
            node = new Node(data)
            return node
        }

        if (data>root.right) node.right = this.insert(data, node.right)
        else if (data<root.left) node.left = this.insert(data, node.left)

        return node
    }

    delete(data, node = this.root) {
        if (node == null) return node;
    
        if (data < node.data) node.left = this.delete(data, node.left);
        else if (data > node.data) node.right = this.delete(data, node.right);
        else {
          // node with only one child or no child
          if (node.left == null) return node.right;
          if (node.right == null) return node.left;
    
          // node with two children
          node.data = this.minValue(node.right);
          node.right = this.delete(node.data, node.right);
        }
        return node;
      }

    minValue(node){
        let minV = node.data
        console.log(minV)
        while (node !== null){
            minV = node.left.data
            console.log(minV)
            node = node.left.data
            console.log(node)
        }
        return minV
    }

    find(data, node = this.root){
        if (node === undefined) return null;
        if(node.data === data) return node
        if (data<node.data) return this.find(data, node.left)
        if (data>node.data) return this.find(data, node.right)
        return "No Given Value"
    }

    levelOrder(func = this.toArray ){
        this.levelOrderTransversed = []
        if (this.root === null) return;
        const queue = []
        queue.push(this.root)

        while(queue.length>0){
            const node = queue[0];
            func(this.levelOrderTransversed, node.data)
            if (node.left != null) queue.push(node.left);
            if (node.right != null) queue.push(node.right)
            queue.shift()
        }

        return this.levelOrderTransversed

    }

    toArray(arr, value) {
        return arr.push(value);
      }

    inorder() {
        this.inorderTransversed = [];
        return this.recInorder();
      }
    
    recInorder(func = this.toArray, node = this.root) {
        if (node === null) return;
        this.recInorder(func, node.left)
        func(this.inorderTransversed, node.data);
        this.recInorder(func, node.right);
        return this.inorderTransversed;
        
      }

    preOrder(){
        this.preorderTransversed = []
        return this.recPreorder()
    }

    recPreorder(func = this.toArray, node = this.root) {

        if (node == null) return;
        func(this.preorderTransversed,node.data)
        this.recPreorder(func, node.left)
        this.recPreorder(func, node.right)
        return this.preorderTransversed

    }

}



export {Tree}