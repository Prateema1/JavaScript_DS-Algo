/**
 * 
 * Stack : sequential collection of elements following LIFO, example: stack of plates
 * It is an abstract data type as it is defined by its behaviour
 * supports two main operations, push and pop, insert at the top and remove from the top
 * 
 * Usage:  Typically it is great, when we have to trace our steps
 * Example: 1)Undo operation when typing
 *          2)Browser History  Tracking
 *          3) Call Stack in JS Runtime
 *          4) Expression conversions
 */

// Implement stack using array

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
        return;
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack is empty";
        }

        return this.items.pop();
       
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return this.items.toString();
    }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log("Elements in the stack", myStack.print());

myStack.pop();

console.log("Elements in the stack", myStack.print());

