class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;

const print = (head) =>{
    if(head == null) return;
    console.log(head.val);
    print(head.next)
}


const deleteLinkedList = (head , target) =>{
let prev = null;
let curr = head;

while(curr !== null){
    if(curr.val === target){
        prev.next = curr.next;
    }
    prev = curr;    
    curr = curr.next

}

}

const recursiveDeleteLinkedList = (head, target, prev = null) =>{
    let curr = head;
    if(curr === null) return;  // 
    if(curr.val === target){ // a.val == c ; b.val == c ; c.val == c -> true
        prev.next = curr.next; // NA | NA |  b.next is c now change to c.next => d 
    }
    prev = curr // prev = a ; prev = b
    recursiveDeleteLinkedList(curr.next, target, prev ) // (b, 'c', a) | (c , 'c' , b)

}

recursiveDeleteLinkedList(a , 'c')



// deleteLinkedList(a , 'c')
print(a)