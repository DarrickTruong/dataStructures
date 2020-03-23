var Trie = require('./trie');

var HashTable = (function () {
  function HashTable() {
    this.table = new Array(26);
  }

  HashTable.prototype.buildLinks = function () {
    for (var i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  HashTable.prototype.linkBuilt = function () {
    var first = this.table[0];
    if (first === undefined || first.constructor.name !== "Array") {
      return false;
    } else {
      return true;
    }
  }

  HashTable.prototype.buildTries = function () {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
      "Y", "Z"];

    for (var i = 0; i < this.table.length; i++) {
      this.table[i] = new Trie(alphabet[i]);
    }
    // console.log('this', this.table);
  }

  HashTable.prototype.trieBuilt = function () {
    // your code here
    let first = this.table[0];
    if (first === undefined || first.constructor.name != "Trie") {
      // console.log('in false');
      return false;
    } else {
      return true
    }
  }

  HashTable.prototype.simpleHash = function (data) {
    return data.charCodeAt() - 65;
  }

  HashTable.prototype.betterHash = function (data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].charCodeAt();
    }
    return sum % 26;
  }

  HashTable.prototype.simplePut = function (data) {
    this.table[this.simpleHash(data)] = data;
  }

  HashTable.prototype.linkPut = function (data) {
    if (this.linkBuilt() === false) {
      this.buildLinks();
    }

    var loc = this.simpleHash(data);

    if (this.table[loc] !== undefined) {
      this.table[loc].push(data);
    } else {
      this.table[loc] = data;
    }
  }
  // ???
  HashTable.prototype.triePut = function (key, value) {
    // your code here
    if (this.trieBuilt() === false) {
      this.buildTries();
    }

    var pointer = this.table;
    for (let i = 0; i < pointer.length; i++) {
      if (pointer[i].root.chr == key[0]) {
        pointer = pointer[i].root;
        console.log('new pointer', pointer);
      }
    }

    for (let i = 0; i < key.length; i++) {
      var found = false;
      for (let j = 0; j < pointer.next.length; j++) {
        if (pointer.root.next[j].chr == key[j]) {
          console.log('j is', j);
          pointer = pointer.next[j];
          found = true;
        }
      }
      if (found = false) {
        let trie = new Trie(key[j]);
        pointer.next.push(trie);
      }
    }
    pointer.value = value;
  }

  HashTable.prototype.trieGet = function (key) {
    // your code here
    

  }

  HashTable.prototype.showDistribution = function () {
    for (var i = 0; i < this.table.length; i++) {
      console.log(this.table[i]);
    }
  }

  return HashTable;
})();

module.exports = HashTable;
