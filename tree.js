import Node from "./node";

export default class Tree {
    constructor(array) {
        this.array = this.buildTree(array)
    }

    buildTree(array, start, end) {
        sortArr = this.sortArray(array)
        
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
        sortedArray = array.sort(sort((a, b) => a - b))
        return sortedArray
    }

    removeDuplicates(array) {
        filteredArray = array.filter((item, index) => array.indexOf(item) === index)
        return filteredArray;
    }
}