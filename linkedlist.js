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
    lengthOfList(head){
        let curr = head;
        let len = 0;
        while(curr !== null){
            len++;
            curr = curr.next
        }
        return len;
    }
    removeNthNodefromLast(head, N){
        let beforeNode = Math.floor(this.lengthOfList(head)/ N);
        let curr = head;
        let count = 0;
        while(curr !== null){
            if(count == beforeNode){
            console.log(count , beforeNode)
                let shiftnode = curr.next.next
                console.log(shiftnode , curr)
                curr.next = null;
                curr.next = shiftnode;
                shiftnode.prev=curr;
                curr = curr.next.next;
                break;
            }else{
                count++;
                curr = curr.next
            }
           
        }
        return head;

    }

   

}

const list  = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
// console.log(list.head);
// console.log(list.lengthOfList(list.head));
console.log("console.log", list.removeNthNodefromLast(list.head, 1))


