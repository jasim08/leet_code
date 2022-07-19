class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//    L <- N -> R

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

//         a
//       /   \
//     b       c
//    / \     /  \
//   d   e   f     g

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;



    const breadthFirstSearch = (root)=>{
        const queue = [root];
        while(queue.length > 0 ){
            const curr = queue.shift();
            console.log(curr.val);
            if(curr.left !== null){
                queue.push(curr.left)
            }
            if(curr.right !== null){
                queue.push(curr.right)
            }
        }
       
    }
breadthFirstSearch(a)
    
