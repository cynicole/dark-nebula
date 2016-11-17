exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        arr.splice(i, item);
      };
    };
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        count += 1;
      };
    };
    return count;
  },

  duplicates : function(arr) {
    var duplicates = [];
    var sortedArr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (sortedArr[i] === sortedArr[i - 1]) {
        duplicates.push(sortedArr[i]);
      };
    };
    return _.uniq(duplicates);
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = (arr[i] * arr[i]);
    };
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [], i;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target)
        occurences.push(i);
      };
      return occurences;
  }
};
