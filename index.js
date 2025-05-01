import LinkedList from './linkedlist.js';

const list = new LinkedList();

list.prepend('first node');
list.prepend('[prepended] second node [head now]');
list.append('[append] third node [tail now]');
console.log(list.toString());
console.log(`Size of linked list is ${list.size}`);
console.log(`Head of linked list is ${list.head.value}`);
console.log(`Tail of linked list is ${list.tail.value}`);
