// main.js
var Stack = require('./stack')
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

var Queue = require('./queue');
var queue = new Queue();
queue.enqueue("Bird");
queue.enqueue("Magic");
queue.enqueue("Jordan");
queue.enqueue("Kobe");
queue.enqueue("Shaq");
queue.display();
console.log("You can stop waiting Bird");
queue.dequeue();
queue.display();

var SinglyLinkedList = require('./linkedList');
var basketballTeams = new SinglyLinkedList();
basketballTeams.insert("Lakers", "head");
basketballTeams.display();
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display()

var SinglyLinkedList = require('./linkedList');
var cities = new SinglyLinkedList();
cities.insert("Los Angeles", "head");
cities.display();
cities.insert("San Francisco", "Los Angeles");
cities.display();
cities.insert("Seattle", "Los Angeles");
cities.display();