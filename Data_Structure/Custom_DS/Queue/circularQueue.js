/**
 * This is an extended version of a regualr queue.
 * The size of the queue is fixed and a single block of memory is used as the first element is connected 
 * to the last element in the queue
 * Also referred to as circular buffer or ring buffer and follows the FIFO principle.
 * A circular queue will reuse the empty block created during the dequeue operation
 * When working with queues of fixed maximum size, a circular queue is a great implementation choice
 * 
 * The Circulat Queue DS supporta main 2 operations:
 * 
 * Enqueue, which adds an element to the rear/tail of the collection
 * Dequeue, which removes an element from the front/head of the collection
 * 
 * Usage:
 * -- Clock
 * -- Streaming Data
 * -- Traffic Lights
 * 
 * Useful when we have fixed queue size
 */

class CircularQueue {
  constructor(capacity) {
     this.items = new Array(capacity);
     this.capacity = capacity;
     this.currentLength = 0;
     this.rear = -1;
     this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(item) {
    if(!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength++;
      if(this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
   if(this.isEmpty()) {
     return null;
   }

   const item = this.items[this.front];
   this.items[this.front] = null;
   this.front = (this.front + 1) % this.capacity;
   this.currentLength--;

   if(this.isEmpty()) {
    this.front = -1;
    this.rear = -1;
   }

   return item;
  }

  peek() {
    if(!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if(this.isEmpty()) {
      console.log('Queue is empty');
    } else {
      let i ;
      let str = '';
      for(i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
        str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str)
  }
}
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();

queue.enqueue(60);

queue.print();