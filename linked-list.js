// Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head;
  }

  prepend(head, next){
    this.head = new Node(head, next)
  }

  append(value){
    if(this.head !== null){
      this.next = value
    }
  }
}

const list = new LinkedList();
list.prepend(100)
list.append(200)
list.append(300)

console.log(list);