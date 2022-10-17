const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root2 = null
  }

  root() {
    return this.root2
  }

  add( data ) {
    this.root2 = addNode(this.root2,data)
    
    function addNode(node,data) {
      if(!node) {
        return new Node(data)
      }
      if(node.data === data) {
        return node
      }

      if(data < node.data) {
        node.left = addNode(node.left,data)
      }else {
        node.right = addNode(node.right,data)
      }
      return node
    }
  }

  has( data ) {
    return searchNode(this.root2,data);

    function searchNode (node,data) {
      if(!node) {
        return false
      }
      if(node.data === data) {
        return true
      }
       
      return data < node.data ? searchNode (node.left,data) : searchNode (node.right,data)
    }
  }

  find( data ) {
    return findNode(this.root2,data)
    function findNode (node,data) {
      if(!node) {
        return null
      }
      if(node.data === data) {
        return node
      }
       
      return data < node.data ? findNode (node.left,data) : findNode (node.right,data)
    }
  }

  remove( data ) {
    this.root2 = removeNode(this.root2,data)
    function removeNode(node,data) {

      if(!node) {
        return null
      }
      if(data < node.data) {
        node.left = removeNode(node.left,data)
        return node
      }else if(data > node.data) {
        node.right = removeNode(node.right,data)
        return node
      }else {
        if(!node.left && !node.right) { //лист(без детей)
          return null
        }
        if(!node.left) {
          //если нету левого заменяем наш елемент на правое дерево
          node = node.right
          return node  
        }
        if(!node.right) {
          //если нету правого заменяем наш елемент на левое дерево
          node = node.left
          return node  
        }
        
        //оба ребенка существуют
        let minFromRight = node.right
        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right,minFromRight.data)

        return node
        // let maxFromLeft = node.left
        // while(maxFromLeft.right) {
        //   maxFromLeft = maxFromLeft.right
        // }
        // node.data = maxFromLeft.data
        // node.right = removeNode(node.left,maxFromLeft.data)

        // return node
      }
    }
  }

  min() {
    if(!this.root2) {
      return
     }
  
     let node = this.root2
     while(node.left) {
      node = node.left
     }
     return node.data
  }

  max() {
    if(!this.root2) {
      return
     }
     
     let node = this.root2
     while(node.right) {
      node = node.right
     }
     return node.data
  }
}

module.exports = {
  BinarySearchTree
};