/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var cloneGraph = function(root) {
    if (!root) return null;

    let q = [root];
    let visited = new Map();
    let clonedRoot = new _Node(root.val);
    visited.set(root, clonedRoot);

    while (q.length) {
        let curr = q.shift();

        for (let n of curr.neighbors) { // Fixed spelling: 'neighbors'
            if (!visited.has(n)) {
                visited.set(n, new _Node(n.val));
                q.push(n);
            }
            
            // Connect neighbor to curr's clone, not clonedRoot
            let cloneCurr = visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }

    return clonedRoot; // Return the cloned copy, not original root
};