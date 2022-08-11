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
