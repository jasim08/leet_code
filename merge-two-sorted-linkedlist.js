var mergeTwoLists = function(list1, list2) {
  
    let l1 = 0, l2 = 0, mergedList = [];
    while(l1 < list1.length && l2 < list2.length){

        if(list1[l1] < list2[l2]){
            mergedList.push(list1[l1])
            l1++;
        }else{
            mergedList.push(list2[l2])
            l2++
        }

    }

    return mergedList;
    
};

console.log(mergeTwoLists([1,2,4] , [1,3,4]))