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
  if (/[^a-zA-Z0-9\s]/.test(password)) score++;
  if (score <= 2) {
    return 'weak';
  }

  if (score <= 4) {
    return 'medium';
  }

  return 'strong';
}