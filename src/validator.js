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
  } else if (!/^\+?\d{7,15}$/.test(phone.replace(/[\s\-().]/g, ''))) {
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