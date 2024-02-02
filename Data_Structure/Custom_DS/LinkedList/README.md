# Linked List

- Linear DS that includes a series of connected nodes.
- Each node consists of a data value and a pointer that points to the next node
- The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure
- Random access of elements is not feasible and accessing an element has linear time complexity
-
- The linked list DS supports 3 main operations:
- ---- Insertion: to add an element at the beginning, end or at a given index in the list
- ----- Deletion: to remove an item given its index or value
- ------ Search: to find an element given its value
-
- ---- Linked List Usage
- ----- All apps of both stacks and queues are applicable to linked lists
- ---- Example: Image Viewer

## Linked List - Prepend (Empty List)

--- Have to create a new node with a value and pointer pointing to null.

-- Once node is prepend, we have to handle situation, where the list might be empty. If empty we have to make head pointer to newly created node.

-- When the list is not empty, make newly created node point to the head node and make the newly added node as the head node. This will insure connectivity and make sure head always points to the first node.

-- constant Time Complexity O(1)

## Linked List - Print

-- To visualize the nodes, we can implement the print method.

-- First check if the list is empty.

-- To traverse through the nodes, we will create a temporary pointer called current to traverse the list.

-- It will point to the head node first, then current = current.next and we will traverse until current.next will point to the null. It means we have covered all the nodes in the list.

## Linked List - Append (At last)

-- Linear Time Complexity O(N)

## Linked List Insert At a Given Index

-- The index will lie in the range from 0 to the size of the linked list (inclusive)

### Scenarios

-- Invalid Index
-- Index = 0
-- Valid index and index > 0

## Remove A Node From A Given Index

### Scenarios

--- Index < 0 || Index > this.size

--- Index is equal to zero.

--- Valid index and index greater than zero.
