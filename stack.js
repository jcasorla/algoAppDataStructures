// stack.js
var Stack = (function(){
    function Stack() {
      this.dataStore = [];
      this.top = 0;
    }
    Stack.prototype.push = function(item) {
        this.dataStore.push(item);
    }
    Stack.prototype.pop = function() {
        this.dataStore.pop();
    }
    Stack.prototype.display = function() {
        console.log(this.dataStore);
      // your code here
    }
    return Stack;
  })();

  // main.js
// var Stack = require('./stack')
var stack = new Stack();
stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");
stack.display();
console.log("Taking out Squirtle");
stack.pop();
stack.display();
console.log("Adding Pikachu");
stack.push("Pikachu");
stack.display();