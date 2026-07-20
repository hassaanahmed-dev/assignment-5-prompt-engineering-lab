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

### Test Summary

The password strength checker was manually tested with empty input, invalid input, short passwords, numbers-only passwords, and passwords containing different character types. All test cases produced the expected results.