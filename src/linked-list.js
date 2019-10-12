const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);
    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this.length += 1;
    return this;
  }

  head() {
    if (this._head) {
      return this._head.data;
    } else {
      return null;
    }
  }

  tail() {
    if (this._tail) {
      return this._tail.data;
    } else {
      return null;
    }
  }

  at(index) {
    if (index === 0) {
      return this._head.data;
    } else {
      let counter = 0;
      let currentNode = this._head;
      while (counter < index) {
        currentNode = currentNode.next;
        counter += 1;
      }
      return currentNode.data;
    }
  }

  insertAt(index, data) {
    const node = new Node(data);
    if (!this._head){
      this._head = node;
      this.length += 1;
      return this;
    }
    if (index === 0) {
      node.next = this._head;
      this._head.prev = node;
      this._head = node;
    } else if (index === this.length) {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    } else {
      let counter = 0;
      let currentNode = this._head;
      while (counter < index) {
        counter += 1;
        currentNode = currentNode.next;
      }
      let previousNode = currentNode.prev;
      previousNode.next = node;
      node.prev = previousNode;
      node.next = currentNode;
      currentNode.prev = node;
    }
    this.length += 1;
    return this;
  }

  isEmpty() {
    return !this._head;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    if (index === 0) {
      this._head = this._head.next;
    } else if (index === this.length - 1) {
      this._tail = this._tail.prev;
      this._tail.next = null;
    } else {
      let counter = 0;
      let currentNode = this._head;
      while (counter < index) {
        counter += 1;
        currentNode = currentNode.next;
      }
      let prevNode = currentNode.prev;
      let nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length -= 1;
    return this;
  }

  reverse() {
    let temp = this._head; 
    this._head = this._tail; 
    this._tail = temp;
    let currentNode = this._head;
    while (currentNode != null) {
      temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      currentNode = currentNode.next;
    }
    return this;
  }

  indexOf(data) {
    let position = 0;
    let currentNode = this._head;
    while (currentNode.next){
      if (currentNode.data === data){
        return position
      } else{
        position += 1;
        currentNode = currentNode.next;
      }
    }
    if (currentNode.data === data){
      return position;
    }
    return -1;
  }
}

module.exports = LinkedList;
