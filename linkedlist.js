import Node from "./node.js";

class LinkedList {
  constructor() {
    this._head = null;
  }

  prepend(value) {
    const node = Node(value, this._head);
    this._head = node;
  }

  get head() {
    return this._head.value;
  }

  get tail() {
    let point = this._head;

    while(point.next) {
      point = point.next;
    }

    return point.value;
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