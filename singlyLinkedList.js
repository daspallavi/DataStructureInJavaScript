/* Singy linked list */
/**
 * It contains a tail head and length
 * no index for the number
 * each node consists of value and pointer to next value/null
 * Random access is not allowed unlike arrays
 */
console.log("Singley Linked List");

// creating Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        // initially head and tail points to null and length is 0
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {

    }
}