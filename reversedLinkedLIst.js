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

const reversedList = (head) =>{
    let curr = head;
    let prev = null;
    while(curr !== null){ // curr = a ; curr = b
        const next = curr.next; // next = b ; next  = c
        curr.next = prev; //  a.next = null ; b.next = a
        prev = curr; //  prev = a ; prev = b
        curr = next; //  curr = b; curr = c

    }

    return prev; // return new head

}



const recursiveLinkedList = (curr, prev = null) =>{ 

    if(curr == null){
        return prev;
    }
    const next = curr.next;
    curr.next  = prev;
    return recursiveLinkedList(next, curr)

}

print(a)
// const newHead = reversedList(a)
const newHead = recursiveLinkedList(a)
console.log("==========")
print(newHead)
// print(d)