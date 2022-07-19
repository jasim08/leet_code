class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
//method 1:  not recursive start, while loop
    // append(val){
    //     if (this.head == null){
    //         this.head = new Node(val);
    //         return;
    //     }
    //     let curr = this.head
    //     while(curr.next !== null){
    //         curr = curr.next
    //     }
    //     curr.next = new Node(val)

    // }

 // print(){
    //     let str = '';
    //     let curr = this.head;
    //     while(curr !== null){
    //         str += '->'+curr.val;
    //         curr = curr.next
    //     }
    //   console.log(str)
    // }

    // not recursive end


    // Recursive method start
    _append(val, curr){
        if(curr.next === null){
            curr.next = new Node(val);
            return;
        }
       this._append(val, curr.next);
        
    }

    append(val){
        if(this.head === null){
            this.head = new Node(val);
            return;
        }
        this._append(val, this.head)

    }
    _print(curr,str){
        if(curr == null){
            return str;
        }
        str += '->'+ curr.val;
        return this._print(curr.next, str)
    }

    print(){
        let str = '';
        return this._print(this.head, str)
    }

    reverseList(head){
        let prev = null;
        let curr = head;
        while(curr != null){
            prev = curr.next;
            prev.next = curr
            curr = curr.next
            
        }
        
        return curr;
    }

   

   

}

const list  = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
// console.log(list.head);
console.log(list.reverseList(list.head));


