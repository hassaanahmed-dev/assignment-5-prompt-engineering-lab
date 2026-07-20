function analyzeText(text) {
  var words = text.split(' ').filter(function(word) {
    return word !== '';
  }).length;

  var charactersWithoutSpaces = 0;

  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      charactersWithoutSpaces++;
    }
  }

  var charactersWithSpaces = text.length;

  return {
    words: words,
    charactersWithoutSpaces: charactersWithoutSpaces,
    charactersWithSpaces: charactersWithSpaces
  };
}