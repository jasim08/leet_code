
var StockSpanner = function() {
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;
    while(this.stack.length && this.stack[this.stack.length - 1].price <= price){
        count += this.stack[this.stack.length - 1].count;
        this.stack.pop()     
    }
    this.stack.push({price, count})
    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */