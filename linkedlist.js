import Node from "./node.js";

class LinkedList {
  constructor() {
    this._head = null;
  }

  get head() {
    return this._head;
  }

  get tail() {
    let point = this._head;

    while(point.next) {
      point = point.next;
    }

    return point;
  }

  prepend(value) {
    const node = Node(value, this._head);
    this._head = node;
  }

  append(value) {
    const node = Node(value);
    this.tail.next = node;
  }

  get size() {
    let point = this._head;
    let count = 0;

    while(point) {
      count += 1;
      point = point.next;
    }

    return count;
  }

  pop() {
    let pointer = this._head;
    const size = this.size;
    let counter = 1;

    while(counter < size-1) {
      pointer = pointer.next;
      counter = counter+1;
    }
    pointer.next = null;
  }

  at(index) {
    let pointer = this._head;
    let counter = 0;
    const size = this.size;

    if(size < index) throw new Error(`The list contains ${size} elements, passed index is ${index}`);

    while(counter !== index) {
      pointer = pointer.next;
      counter = counter+1;
    }

    return pointer;
  }

  contains(value) {
    let isContains = false;
    let pointer = this._head;

    while(pointer.next && !isContains) {
      if(pointer.value === value) {
        isContains = true;
      }

      pointer = pointer.next;
    }

    return isContains;
  }

  toString() {
    let result = '';
    let point = this._head;

    while(point) {
      result += `( ${point.value} ) -> `;

      if(!point.next) {
        result += 'null';
      }

      point = point.next;
    }

    return result;
  }
}

export default LinkedList;