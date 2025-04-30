import LinkedList from './linkedlist.js';

const list = new LinkedList();

list.prepend('first node');
list.prepend('second node (Prepended)');
console.log(list.toString());
console.log(`Size of linked list is ${list.size}`);
