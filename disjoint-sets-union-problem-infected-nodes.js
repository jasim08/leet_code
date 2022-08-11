/* find and remove infected node with minimum damage of network.
Imaging if 1 and 2 nodes are infected. which one is removed to cause minimized damage
Ans is 1 because it having weightage of only one node. but 2 having weightage of 3 nodes. So remove node 1.
  0      
 /
1
 \      / 5
  2 -- 3
        \ 4
*/

// STEP TO FOLLOW:
// * remove initially infected node 1 and 2 add change it as -1 means itself a parent
//  [-1, -1, -1, -3, 3, 3]
// * For each initially infected node, add it back to the clean graph, aka(also known as) call union between it and the nodes it is connected to.
/* if add 1 and 2 graph looks
                       [-1, -1, -1 , -3, 3, 3]
                                / \
                  add node 1   /   \  add node 2
    [1, -2, -1, -3, 3, 3]               [1, -1, -4, 2, 3, 3] 
     0   1   2   3  4  5                 0   1   2  3  4  5
   * Now check which is weightage higher => is node 2 means remove -4
*/ 
class DSU{
    constructor(size){
        this.components = Array(size).fill(-1);
    }

    // find the parent of node
    find(node){
        if(this.components[node] < 0){
            return node;
        }
       return this.find(this.components[node])
    }


    union(node1, node2){
        // * each node have same parent => there is cycle.
        // but if on different parent => perform union.
        //| -1 | -1 | -1 | -1 | -1 | -1 |
        let set1 = this.find(node1);
        let set2 = this.find(node2);
        if(set1 !== set2){
            const sizeOfset2 = this.components[set2];
            this.components[set1] += sizeOfset2;
            this.components[set2] = set1
        }

    }


}

const dsu = new DSU(10);
console.log(dsu.components);
console.log(dsu.find(5))
dsu.union(2,3)
console.log(dsu.components);
console.log(dsu.find(3))
dsu.union(8,9)
console.log(dsu.components);
console.log(dsu.find(8))
dsu.union(8,3)
console.log(dsu.components);
console.log(dsu.find(3))
