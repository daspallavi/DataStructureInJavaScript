class Linkedlist {

    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;

    }

    /**append items to the tail */
    append(data) {
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

    }

    reverse() {
        let first = this.head;
        let second = this.head.next;


    }

}

const myList = new Linkedlist(10);
myList.append(16);
myList.append(20);
myList.append(21);
console.log(myList);