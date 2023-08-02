const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();

function timing(list, message) {
  let start;
  let end;

  start = Date.now();
  for (let i = 0; i < 10000; i++) {
    list.addToHead(i);
  }
  end = Date.now();
  console.log(`${message}: add to head: ${end - start}`);

  start = Date.now();
  for (let i = 0; i < 10000; i++) {
    list.addToTail(i);
  }
  end = Date.now();
  console.log(`${message}: add to tail: ${end - start}`);
}

timing(linkedList, "linked list");
timing(doublyLinkedList, "doubly linked list");
