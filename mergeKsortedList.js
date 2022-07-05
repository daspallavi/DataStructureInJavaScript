/**
 * Definition for singly-linked list.
 * */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/** input : [[1,4,5],[1,3,4],[2,6]] */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 
 */
let l = [[1, 4, 5], [1, 3, 4], [2, 6]];
var mergeKLists = function (lists) {

    if (!lists.length) return null;

    for (let i = 0; i < lists.length; i++) {
        lists[0] = merge(lists[0], lists[i])
    }
    console.log(lists[0]);
    return lists[0];

};


var merge = function (l1, l2) {

    if (l1 == null) return l2;
    if (l2 == null) return l1;

    if (l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    }
    else {
        l2.next = merge(l1, l2.next);
        return l2;
    }

}

mergeKLists(l);