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

