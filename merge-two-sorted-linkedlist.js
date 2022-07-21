// var mergeTwoLists = function(list1, list2) {
  
//     let l1 = 0, l2 = 0, mergedList = [];
//     while(l1 < list1.length && l2 < list2.length){

//         if(list1[l1] < list2[l2]){
//             mergedList.push(list1[l1])
//             l1++;
//         }else{
//             mergedList.push(list2[l2])
//             l2++
//         }

//     }

//     return mergedList;
    
// };



var mergeTwoLists = function(list1, list2) {
    
    const dummy = new ListNode(-Infinity);
     let prev = dummy;
     
     while(list1 && list2){
         
         if(list1.val <= list2.val){
             prev.next = list1;
             prev = list1;
             list1 = list1.next
         }else{
             prev.next = list2;
             prev = list2;
             list2 = list2.next;
         }
         
     }
     
     if(!list1) prev.next = list2;
     if(!list2) prev.next = list1;
     
     return dummy.next;
     
 };

console.log(mergeTwoLists([1,2,4] , [1,3,4]))