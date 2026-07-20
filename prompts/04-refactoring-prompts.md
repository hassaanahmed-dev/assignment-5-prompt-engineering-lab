# Mission 4 - Refactoring Prompt

## Before Code

```javascript
function doStuff(x) {
  var a = x.split(" ");
  var b = 0;
  var c = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== "") {
      b = b + 1;
    }
  }

  for (var i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      c = c + 1;
    }
  }

  var d = x.length;

  return {
    words: b,
    charactersWithoutSpaces: c,
    charactersWithSpaces: d
  };
}
```

## Refactoring Prompt

Role:
Act as a senior JavaScript developer reviewing beginner-level code.

Task:
Refactor the JavaScript function below to improve readability, naming, and structure.

Context:
This function is a simple text analyzer. It counts the number of words, characters without spaces, and total characters including spaces.

Current Code:

```javascript
function doStuff(x) {
  var a = x.split(" ");
  var b = 0;
  var c = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] !== "") {
      b = b + 1;
    }
  }

  for (var i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      c = c + 1;
    }
  }

  var d = x.length;

  return {
    words: b,
    charactersWithoutSpaces: c,
    charactersWithSpaces: d
  };
}
```

Constraints:
- Do not change the existing behavior.
- Do not add new features.
- Use plain JavaScript only.
- Improve unclear variable and function names.
- Reduce unnecessary or repeated logic where appropriate.
- Keep the code beginner-friendly.
- Do not add external libraries.

Output Format:
1. Refactored JavaScript code
2. Brief explanation of each improvement
3. Explain why the refactoring does not change the original behavior

Verification:
Suggest manual test cases that can be used on both the original and refactored functions to confirm that they return identical results.

## AI Output

```javascript
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
```

## Improvements Made by AI

The AI improved the function and parameter names from `doStuff(x)` to `analyzeText(text)`.

It replaced unclear variables such as `a`, `b`, `c`, and `d` with descriptive names.

The manual word-counting loop was replaced with `filter()` to make the logic easier to understand.

The character counting logic and return structure remained unchanged.

## Final Result

```javascript
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
```
