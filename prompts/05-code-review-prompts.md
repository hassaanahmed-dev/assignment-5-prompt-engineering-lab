# Mission 5 - AI Code Review

## Code Review Prompt

Role:
Act as a strict senior JavaScript engineer performing a professional code review.

Task:
Review the JavaScript code in my project.

Review the code for:
- Bugs
- Poor or unclear naming
- Repeated or unnecessary logic
- Missing validation
- Security concerns
- Maintainability issues
- Beginner-level mistakes
- Edge cases

Constraints:
- Do not rewrite all the code.
- Do not add unnecessary features.
- Keep recommendations suitable for a beginner-level JavaScript project.
- Clearly separate critical issues from optional improvements.
- Only recommend changes that provide a clear benefit.

Files Reviewed:
- `src/passwordStrength.js`
- `src/validator.js`
- `src/discountCalculator.js`

Output Format:
1. List each issue found.
2. Mention which file contains the issue.
3. Explain why it is a problem.
4. Suggest a specific fix.
5. Classify each suggestion as Critical, Recommended, or Optional.

Verification:
Suggest how I should manually verify each recommended change after applying it.

## AI Review Summary

The AI reviewed the existing JavaScript files and identified several possible improvements related to input validation, password character detection, email validation, phone number validation, and maintainability.

The main suggestions included:

1. Add input validation to the discount calculator.
2. Prevent whitespace from being treated as a special character in the password strength checker.
3. Improve email validation for consecutive dots.
4. Support dots as separators in formatted phone numbers.
5. Change the return value for non-string password inputs.
6. Add maximum length validation to form fields.
7. Improve code readability by using braces consistently.

## Selected AI Suggestions

### 1. Add Discount Calculator Input Validation

The AI identified that the discount calculator did not validate invalid prices or discount percentages.

I manually added validation for:
- Non-number inputs
- Negative prices
- Negative discount percentages
- Discount percentages greater than 100

Invalid input now returns `null`.

### 2. Improve Special Character Detection

The AI identified that the password strength checker treated whitespace as a special character.

I manually updated the regular expression so that whitespace is no longer counted as a special character.

Before:

```javascript
if (/[^a-zA-Z0-9]/.test(password)) score++;
```

After:

```javascript
if (/[^a-zA-Z0-9\s]/.test(password)) score++;
```

This change only fixes whitespace handling. Unicode character handling remains outside the scope of the current implementation.

### 3. Support Dots in Formatted Phone Numbers

The AI suggested allowing dots as valid formatting separators in phone numbers.

Before:

```javascript
phone.replace(/[\s\-()]/g, '')
```

After:

```javascript
phone.replace(/[\s\-().]/g, '')
```

This allows formatted phone numbers such as `+1.234.567.8901` to be normalized before validation.

## Rejected AI Suggestions

### Email Regex Change

The AI suggested changing the email regular expression to prevent consecutive dots. I did not apply the suggested solution because the proposed regular expression did not fully guarantee that consecutive dots would be rejected in every case.

### Non-String Password Return Value

The AI suggested returning `weak` instead of `invalid` for non-string password input.

I did not apply this suggestion because returning `invalid` is an intentional design decision that clearly separates invalid input from a valid but weak password.

## Manual Changes Applied

Three AI suggestions were manually selected and applied:

1. Added input validation to `discountCalculator.js`.
2. Updated special character detection in `passwordStrength.js`.
3. Improved formatted phone number support in `validator.js`.

The AI suggestions were reviewed before being applied rather than accepted blindly.
