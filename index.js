import LinkedList from './linkedlist.js';

const list = new LinkedList();

list.prepend('first node');
list.prepend('[prepended] second node [Head now]');
console.log(list.toString());
console.log(`Size of linked list is ${list.size}`);
console.log(`Head of linked list is ${list.head}`);
console.log(`Tail of linked list is ${list.tail}`);
