exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var numb = /\d/;
    return numb.test(str);
  },

  containsRepeatingLetter : function(str) {
    var dupe = /([a-z])\1/gi;
    return dupe.test(str);
  },

  endsWithVowel : function(str) {
    var vowel = /[aeiou]$/i;
    return vowel.test(str);
  },

  captureThreeNumbers : function(str) {
    var threeNumb = /\d{3}/;
    if (threeNumb.test(str)) {
      return threeNumb.exec(str)[0];
    } else {
      return false;
    };
  },

  matchesPattern : function(str) {
    var match = /^\d{3}\W\d{3}\W\d{4}$/;
    return match.test(str);
  },

  isUSD : function(str) {
    var currency = /(?=.)^\$(([1-9][0-9]{0,2}(,[0-9]{3})*))?(\.[0-9]{2})?$/;
    return currency.test(str);
  }
};
