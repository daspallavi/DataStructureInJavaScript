class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    cnstructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            if (current == val) { return undefined }
            while (true) {
                if (val < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else {
                        curent = current.left
                    }
                }
                else if (val > current.value) {
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }

        }
    }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
// tree.root = new Node(10);
// tree.root.left = new Node(7);
// tree.root.right = new Node(11);
// tree.root.left.right = new Node(9);
console.log('tree::', tree);