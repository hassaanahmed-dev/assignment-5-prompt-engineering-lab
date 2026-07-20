# Manual Test Cases

## Mission 1 - Password Strength Checker

| Test Case | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| Empty password | `""` | `weak` | `weak` | Pass |
| Non-string input | `123456` | `invalid` | `invalid` | Pass |
| Very short password | `"abc"` | `weak` | `weak` | Pass |
| Lowercase only | `"abcdefgh"` | `weak` | `weak` | Pass |
| Numbers only | `"12345678"` | `weak` | `weak` | Pass |
| Mixed characters without special character | `"Password1"` | `medium` | `medium` | Pass |
| Mixed characters with special character | `"Password1!"` | `strong` | `strong` | Pass |


## Mission 2 - Form Validator

| Test Case | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| Valid form | Valid name, email, phone and matching passwords | `isValid: true` | `isValid: true` | Pass |
| Empty name | Name is empty | Name required error | Name required error | Pass |
| Invalid email | `salman@invalid` | Invalid email format | Invalid email format | Pass |
| Invalid phone | `123` | Invalid phone format | Invalid phone format | Pass |
| Short password | `abc123` | Password length error | Password length error | Pass |
| Password mismatch | Password and confirm password differ | Password mismatch error | Password mismatch error | Pass |
| Invalid form data | `null` | Invalid form data error | Invalid form data error | Pass |

## Mission 3 - Discount Calculator

| Test Case | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| 10% discount | `200, 10` | `180` | `180` | Pass |
| 25% discount | `100, 25` | `75` | `75` | Pass |
| 50% discount | `50, 50` | `25` | `25` | Pass |
| Zero price | `0, 10` | `0` | `0` | Pass |
| Zero discount | `100, 0` | `100` | `100` | Pass |
| Full discount | `100, 100` | `0` | `0` | Pass |

## Mission 4 - Text Analyzer Refactoring

| Test Case | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| Empty text | `""` | `{ words: 0, charactersWithoutSpaces: 0, charactersWithSpaces: 0 }` | Same | Pass |
| Single word | `"hello"` | `{ words: 1, charactersWithoutSpaces: 5, charactersWithSpaces: 5 }` | Same | Pass |
| Two words | `"hello world"` | `{ words: 2, charactersWithoutSpaces: 10, charactersWithSpaces: 11 }` | Same | Pass |
| Multiple spaces | `"  hello   world  "` | `{ words: 2, charactersWithoutSpaces: 10, charactersWithSpaces: 17 }` | Same | Pass |
| Multiple single-letter words | `"a b c d e"` | `{ words: 5, charactersWithoutSpaces: 5, charactersWithSpaces: 9 }` | Same | Pass |
| Spaces only | `"   "` | `{ words: 0, charactersWithoutSpaces: 0, charactersWithSpaces: 3 }` | Same | Pass |