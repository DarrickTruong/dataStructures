var HashTable = require('./hash_table');
// var words = require('./dictionary.json');

var dictionary = new HashTable();

words = {
  "CORN":1,
  "MEAT":1
};

for(word in words) {
  var safeWord = word.replace(/\W/g, '')
  console.log('word', word, 'safeword', safeWord)
  if(safeWord.length > 0) {
    dictionary.triePut(safeWord, words[word]);
  }
}

dictionary.showDistribution();
console.log(dictionary.trieGet("food"));
console.log(dictionary.trieGet("intercessorial"));
console.log(dictionary.trieGet("many"));
