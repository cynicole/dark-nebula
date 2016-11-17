exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var re = new RegExp("(.)(?=\\1{" + amount +"})", "g");
    return str.replace(re, "");
  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
