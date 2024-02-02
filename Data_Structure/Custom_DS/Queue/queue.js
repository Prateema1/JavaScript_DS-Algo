/**
 * 
 * sequential collection of elements that follows FIFO
 * First element inserted into the queue is first element to be removed
 * 
 * A queue of people. People enter  the queue at one end(rear/tail) and leave
 * the queue from the other end(front/head);
 * 
 * Queue is an abstract data type. It is defined by its behaviour rather than being a mathematical model.
 * 
 * The Queue DS supports 2 main operations:
 * --- Enqueue, which adds an element to the rear/tail of the collection
 * --- Dequeue, which removes an element from the front/head of the collection
 * 
 * Usage:
 * Printers 
 * CPU Task Scheduling
 * Callback queue in JS runtime to determine the order of code execution
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
  return this.items.shift();    // linear time complexity
  }

  isEmpty() {
    if(this.items.length === 0) {
      return "Queue is empty"
    }
  }

  peek() {
    if(!this.isEmpty()) {
      return this.items[0];
    }

    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }

}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());


