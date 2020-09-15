// stack.js
var Stack = (function(){
  function Stack() {
    this.dataStore = [];
    this.top = 0;
  }
  Stack.prototype.push = function(item) {
    // your code here
    if (this.top === 0) {
        this.dataStore[0] = item;
        this.top++;
    } else {
        this.dataStore[this.top] = item;
        this.top++;
    }
  }
  Stack.prototype.pop = function() {
    // your code here
    if (this.top === 0) {
        return "Stack is Empty"
    } else {
        this.dataStore.pop();
        this.top--
    }
  }
  Stack.prototype.display = function() {
    // your code here
    for (let i = 0; i < this.dataStore.length; i++) {
        console.log(this.dataStore[i])
    }
  }
  return Stack;
})();
module.exports = Stack;
