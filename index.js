import LinkedList from './linkedlist.js';

const list = new LinkedList();

const firstValue = 'first node';
const unExistValue = 'abbalagamma';

list.prepend(firstValue);
list.prepend('[prepended] second node [head now]');
list.append('[append] third node [tail now]');
console.log(list.toString());
console.log(`Size of linked list is ${list.size}`);
console.log(`Head of linked list is ${list.head.value}`);
console.log(`Tail of linked list is ${list.tail.value}`);
console.log(`Get node by index 1 ${list.at(1).value}`);
console.log(`Is list contains value ${firstValue}`, list.contains(firstValue));
console.log(`Is list contains value ${unExistValue}`, list.contains(unExistValue));
list.pop();
console.log('Updated list after removing the last node', list.toString());
