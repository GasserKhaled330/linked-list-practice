class LinkedListNode {
  constructor(val, next) {
    this.value = val;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    this.head = new LinkedListNode(val, this.head);
    this.length++;
  }

  addToTail(val) {
    let current = this.head;
    let newNode = new LinkedListNode(val, null);
    if (!this.head) {
      this.head = new LinkedListNode(val, this.head);
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = null;
    }
    this.length++;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;

let linkedList = new LinkedList();

linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToHead(3);

console.log(linkedList.head.next.next.value);
