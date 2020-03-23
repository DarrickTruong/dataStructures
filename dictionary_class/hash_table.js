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
      // console.log('in true');
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
        pointer = pointer[i];
        // console.log('new pointer', pointer);
      }
    }

    for (let i = 1; i < key.length; i++) {
      var found = false;
      for (let j = 0; j < pointer.root.next.length; j++) {
        // console.log(pointer.root.next[j].root.chr, key[i]);
        if (pointer.root.next[j].root.chr === key[i]) {
          // console.log('in found');
          pointer = pointer.root.next[j];
          found = true;
        }
      }
      if (found === false) {
        let trie = new Trie(key[i]);
        pointer.root.next.push(trie);
        pointer = trie;
        // console.log('pointer', pointer)
      }
    }
    pointer.root.value = value;
    // console.log('end', pointer)
  }

  HashTable.prototype.trieGet = function (key) {
    // your code here
    key = key.toUpperCase();
    var pointer = this.table;
    for (let i = 0; i < pointer.length; i++) {
      if (pointer[i].root.chr == key[0]) {
        pointer = pointer[i];
      }
    }
    // console.log('begin', pointer);
    for (let i = 1; i < key.length; i++) {
      var found = false;
      for (let j = 0; j < pointer.root.next.length; j++) {
        // console.log(j, pointer.root.next[j].root.chr, key[i]);
        if (pointer.root.next[j].root.chr == key[i]) {
          // console.log('in found');
          pointer = pointer.root.next[j];
          found = true
        }
      }
      if (found == false) {
        pointer = null;
        break
      }
    }
    // console.log('this pointer', pointer)
    if (pointer && pointer.root.value) {
      return pointer.root.value
    } else {
      return "Not Found"
    }

  }

  HashTable.prototype.showDistribution = function () {
    for (var i = 0; i < this.table.length; i++) {
      console.log(this.table[i]);
    }
  }

  return HashTable;
})();

module.exports = HashTable;
