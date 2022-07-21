/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    
    let curr = head;
    let curr2 = head;
    let middle = null;
    let count = 0;
    while(curr !== null){
        count++;     
        curr = curr.next;
       
    }
    
    
    let i = 0;
     let m = Math.round(count / 2); 
    if(count % 2 === 0){m++}
    while(i < m && curr2 !== null){
        middle = curr2
        curr2 = curr2.next
        i++;
    }
    
    return middle;
             
        
    
};