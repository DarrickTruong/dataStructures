let HashTable = (function () {
    function HashTable() {
        // given fixed size of array of 26 slots
        this.table = new Array(26);
        this.buildLinks();
    }
    HashTable.prototype.buildLinks = function () {
        // set an empty array for all indexes in this.table
        for (let i = 0; i < 26; i++) {
            this.table[i] = [];
        }
    }
    HashTable.prototype.linkBuilt = function () {
        // determines if links have been built yet
        var missing = [];
        for (let i = 0; i < 26; i++) {
            if (this.table[i] == null) {
                missing.push(i);
            }
        }
        for (let i = 0; i < missing.length; i++) {
            this.table[missing[i]] = []
        }
    }
    HashTable.prototype.simpleHash = function (data) {
        // determines the hash value given data
        // how can we use the ASCII values to find appropriate data (use charCodeAt())
        var hashValue = {
            0: "A",
            1: "B",
            2: "C",
            3: "D",
            4: "E",
            5: "F",
            6: "G",
            7: "H",
            8: "I",
            9: "J",
            10: "K",
            11: "L",
            12: "M",
            13: "N",
            14: "O",
            15: "P",
            16: "Q",
            17: "R",
            18: "S",
            19: "T",
            20: "U",
            21: "V",
            22: "W",
            23: "X",
            24: "Y",
            25: "Z"
        }
        return data.charCodeAt(0) - 65;
    }
    HashTable.prototype.betterHash = function (data) {
        // how can we write a better Hash using ASCII values?
    }
    HashTable.prototype.simplePut = function (data) {
        // place data in appropriate place by using simpleHash
        let index = this.simpleHash(data);
        this.table[index].push(data);
    }
    HashTable.prototype.linkPut = function (data) {
        // build links if not built yet and place data in the right place
    }
    HashTable.prototype.showDistribution = function () {
        // shows distribution of hash table
        for (var i = 0; i < this.table.length; i++) {
            console.log(this.table[i]);
        }
    }
    return HashTable;
})();

module.exports = HashTable;
