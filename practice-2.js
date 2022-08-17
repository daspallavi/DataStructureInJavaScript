

// JavaScript program to print left view of
// Binary Tree
class newNode {

    // Construct to create a newNode
    constructor(key) {
        this.data = key
        this.left = null
        this.right = null
        this.hd = 0
    }
}

// function to print left view of
// binary tree
function printLeftView(root) {

    if (root == null)
        return

    let q = []
    q.push(root)

    while (q.length) {

        // number of nodes at current level
        let n = q.length

        // Traverse all nodes of current level
        for (let i = 1; i < n + 1; i++) {
            let temp = q.shift()
            console.log('temp::', temp)

            // Print the left most element
            // at the level
            if (i == 1)
                console.log(temp.data, " ")

            // Add left node to queue
            if (temp.left != null)
                q.push(temp.left)

            // Add right node to queue
            if (temp.right != null)
                q.push(temp.right)
        }
    }
}

// Driver Code
let root = new newNode(10)
//root.left = new newNode(2)
//root.right = new newNode(3)
// root.left.left = new newNode(7)
// root.left.right = new newNode(8)
// root.right.right = new newNode(15)
// root.right.left = new newNode(12)
// root.right.right.left = new newNode(14)
printLeftView(root)

// This code is contributed by shinjanpatra


