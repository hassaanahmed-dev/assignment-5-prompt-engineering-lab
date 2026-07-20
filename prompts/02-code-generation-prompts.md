# Mission 2 - Constraint-Based Code Generation

## Professional Prompt

Role:
Act as a senior JavaScript mentor.

Task:
Create a reusable JavaScript form validation function.

Context:
The function will be used to validate registration form data before submission.

Constraints:
- Use plain JavaScript only.
- Do not use external libraries.
- Do not manipulate the DOM.
- The function must be reusable.
- Return structured errors.
- Validate name, email, phone, password, and confirm password.
- Handle empty fields and invalid formats.
- Keep the code beginner-friendly.

Output Format:
1. JavaScript code
2. Explanation
3. Manual test cases

Edge Cases:
- Empty fields
- Invalid email format
- Invalid phone format
- Short password
- Password and confirm password mismatch
- Non-object or missing input data

Verification:
Explain how the function should be tested manually.

## AI Output

```javascript

function validateRegistrationForm(data) {
  const errors = {};

  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return { valid: false, errors: { _form: 'Invalid input data.' } };
  }

  // --- Name ---
  const name = (data.name || '').trim();
  if (name.length === 0) {
    errors.name = 'Name is required.';
  }

  // --- Email ---
  const email = (data.email || '').trim();
  if (email.length === 0) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format.';
  }

  // --- Phone ---
  const phone = (data.phone || '').trim();
  if (phone.length === 0) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\+?\d{7,15}$/.test(phone.replace(/[\s\-()]/g, ''))) {
    errors.phone = 'Invalid phone number format.';
  }

  // --- Password ---
  const password = data.password || '';
  if (password.length === 0) {
    errors.password = 'Password is required.';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }

  // --- Confirm Password ---
  const confirmPassword = data.confirmPassword || '';
  if (confirmPassword.length === 0) {
    errors.confirmPassword = 'Please confirm your password.';
  } else if (password && confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
```