# Mission 1 - Bad Prompt vs Professional Prompt

## Bad Prompt
Make a password strength checker in JavaScript.

## AI Output from Bad Prompt
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password Strength Checker</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    display: flex; justify-content: center; align-items: center;
    min-height: 100vh; background: #0f172a; color: #e2e8f0;
  }
  .container {
    background: #1e293b; padding: 2rem; border-radius: 12px;
    width: 400px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  }
  h1 { font-size: 1.25rem; margin-bottom: 1rem; text-align: center; }
  input {
    width: 100%; padding: 12px; font-size: 1rem;
    background: #0f172a; color: #e2e8f0; border: 1px solid #334155;
    border-radius: 8px; outline: none; transition: border 0.2s;
  }
  input:focus { border-color: #6366f1; }
  .meter { height: 8px; background: #0f172a; border-radius: 4px; margin: 12px 0; overflow: hidden; }
  .bar { height: 100%; width: 0%; border-radius: 4px; transition: width 0.3s, background 0.3s; }
  .label { font-size: 0.875rem; font-weight: 600; margin-bottom: 8px; }
  .checks { list-style: none; font-size: 0.8rem; }
  .checks li { padding: 4px 0; display: flex; align-items: center; gap: 6px; }
  .checks li::before { content: '✗'; color: #ef4444; font-weight: bold; }
  .checks li.valid::before { content: '✓'; color: #22c55e; }
  .checks li.valid { color: #22c55e; }
</style>
</head>
<body>
<div class="container">
  <h1>Password Strength Checker</h1>
  <input type="text" id="password" placeholder="Enter password" autocomplete="off" />
  <div class="meter"><div class="bar" id="bar"></div></div>
  <div class="label" id="strengthLabel">No password</div>
  <ul class="checks" id="checks">
    <li id="c-length">At least 8 characters</li>
    <li id="c-lower">Contains lowercase letter</li>
    <li id="c-upper">Contains uppercase letter</li>
    <li id="c-digit">Contains digit</li>
    <li id="c-special">Contains special character</li>
  </ul>
</div>
<script>
const password = document.getElementById('password');
const bar = document.getElementById('bar');
const label = document.getElementById('strengthLabel');
const checks = {
  length: document.getElementById('c-length'),
  lower: document.getElementById('c-lower'),
  upper: document.getElementById('c-upper'),
  digit: document.getElementById('c-digit'),
  special: document.getElementById('c-special'),
};

function checkStrength(pwd) {
  const len = pwd.length >= 8;
  const lower = /[a-z]/.test(pwd);
  const upper = /[A-Z]/.test(pwd);
  const digit = /\d/.test(pwd);
  const special = /[^a-zA-Z\d]/.test(pwd);

  checks.length.classList.toggle('valid', len);
  checks.lower.classList.toggle('valid', lower);
  checks.upper.classList.toggle('valid', upper);
  checks.digit.classList.toggle('valid', digit);
  checks.special.classList.toggle('valid', special);

  const score = len + lower + upper + digit + special;
  const colors = ['#ef4444', '#ef4444', '#f97316', '#eab308', '#22c55e', '#22c55e'];
  const texts = ['No password', 'Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'];

  bar.style.width = (score / 5 * 100) + '%';
  bar.style.background = colors[score];
  label.textContent = pwd ? texts[score] : 'No password';
}

password.addEventListener('input', (e) => checkStrength(e.target.value));
</script>
</body>
</html>

## Problems Found
The bad prompt was too vague and did not specify any constraints or expected output format.
As a result, the AI generated a complete HTML, CSS, and JavaScript user interface instead of only a reusable JavaScript function.
The better prompt improved the result by clearly asking for a reusable JavaScript function and defining the password checks and expected strength levels.

## Better Prompt
Create a reusable JavaScript function that checks password strength.
Check password length, uppercase letters, lowercase letters, numbers, and special characters.
Return weak, medium, or strong. 

## AI Output from Better Prompt
function checkPasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z\d]/.test(password)) score++;

  if (score < 3) return 'weak';
  if (score < 5) return 'medium';
  return 'strong';
}

## Professional Prompt
Role:
Act as a senior JavaScript mentor.

Task:
Create a reusable password strength checker function.

Context:
The function will be used in a registration form to evaluate
a password before submission.

Constraints:
- Plain JavaScript only.
- No external libraries.
- Do not manipulate the DOM.
- Keep the function reusable and beginner-friendly.
- Handle invalid and empty inputs.

Output Format:
1. JavaScript code
2. Explanation
3. Manual test cases

Edge Cases:
- Empty string
- Non-string input
- Very short password
- Password containing only numbers
- Password containing mixed character types

Verification:
Explain how I should manually test the function. 

## AI Output from Professional Prompt
function checkPasswordStrength(password) {
  if (typeof password !== 'string') {
    return 'weak';
  }

  if (password.length === 0) {
    return 'weak';
  }

  let score = 0;

  if (password.length >= 8) {
    score++;
  }

  if (/[a-z]/.test(password)) {
    score++;
  }

  if (/[A-Z]/.test(password)) {
    score++;
  }

  if (/\d/.test(password)) {
    score++;
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score++;
  }

  if (score <= 2) {
    return 'weak';
  }

  if (score <= 4) {
    return 'medium';
  }

  return 'strong';
}
## Final Result

```javascript
function checkPasswordStrength(password) {
  if (typeof password !== 'string') {
    return 'invalid';
  }

  if (password.length === 0) {
    return 'weak';
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) {
    return 'weak';
  }

  if (score <= 4) {
    return 'medium';
  }

  return 'strong';
}
```

## Manual Verification

| Input | Expected Result | Actual Result | Status |
|---|---|---|---|
| "" | weak | weak | Pass |
| 123456 | invalid | invalid | Pass |
| "abc" | weak | weak | Pass |
| "abcdefgh" | weak | weak | Pass |
| "Password1" | medium | medium | Pass |
| "Password1!" | strong | strong | Pass |

The function was tested manually using different password types, including empty input, invalid input, short passwords, and passwords containing mixed character types.