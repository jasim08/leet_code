

const _productsOfArray = (arr, ix) =>{
    if(arr.length == 0) return 0;
    let product = 1;
    for(let i = 0; i < arr.length; i++){
        if(i != ix){
            product *= arr[i]
        }
        
    }   
    return product;

} 

const productsOfArraywithoutCurrentIndex = (arr) =>{
    let products = []
    if(arr.length === 0) return [];
    for(let i= 0; i< arr.length; i++){
        products.push(_productsOfArray(arr, i))
    }

    return products;

}

console.log(productsOfArraywithoutCurrentIndex([1,2,3,4]))