import Node from "./node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = Node(value, this.head);
    this.head = node;
  }

  get size() {
    let point = this.head;
    let count = 0;

    while(point) {
      count += 1;
      point = point.next;
    }

    return count;
  }

  toString() {
    let result = '';
    let point = this.head;

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