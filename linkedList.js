/** stored as object in memory */
// (head)10 --> 16 -->20(tail)

/** Memory storage of linkedlist */
// let linkedList = {
//     head: {
//         value: 10,
//         // next: null initially points to nothing
//         next: {
//             value: 16,
//             next: {
//                 value: 20,
//                 next: null // this is tail , end point
//             }
//         }
//     },
// };

class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    //** Appending on tail */
    append(data) {
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode; // node of 10 pointing to 16
        this.tail = newNode; // tail set to 16
        this.length++;
    }


    /** Prepending to head */
    preprend(data) {
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++
    }

    /** inserting to a particular index */
    // 2 10--> 16 --> 20
    // \ /
    //  4

    traversing(req) {
        let counter = 0;
        let currentNode = this.head;

        while (counter != req) {
            counter++;
            currentNode = currentNode.next;
        }

        return currentNode;

    }
    insert(index, data) {
        const newNode = {
            value: data,
            next: null
        }
        const leaderNode = this.traversing(index - 1);
        const nextNode = leaderNode.next;

        leaderNode.next = newNode;
        newNode.next = leaderNode;
        this.length++;

    }

    /** deleting node */

    /** inserting to a particular index */
    // 2 ==> 10--> 16 --> 20
    // \ /   deleting this node
    //  4

    delete(index) {
        const leaderNode = this.traversing(index - 1);
        const nextNode = leaderNode.next.next;

        leaderNode.next = nextNode;
        this.length--;

    }

    /** Reversing linkedlist */
    reverse() {
        let first = this.head
        this.tail = this.head
        let second = this.head.next

        while (second) {
            let temp = second.next;
            second.next = first
            first = second;
            second = temp

        }
        this.head.next = null;
        this.head = first;

    }
}

const myList = new LinkedList(10);
myList.append(16);
myList.append(20);
myList.preprend(2);
// myList.insert(1, 4);
// myList.delete(1);
myList.reverse();
console.log(myList);

