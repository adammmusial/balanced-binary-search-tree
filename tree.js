import Node from "./node.js";

export default class Tree {
    constructor(array) {
        this.array = this.buildTree(array)
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



    
}