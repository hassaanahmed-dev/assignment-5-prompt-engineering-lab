# Mission 3 - Debugging with AI

## Broken Code

```javascript
function calculateDiscount(price, discountPercent) {
  return price - discountPercent;
}
```

## Problem

The discount calculation function is producing an incorrect result.

Test Input:
- price = 200
- discountPercent = 10

Expected Result:
180

Actual Result:
190

## Debugging Prompt

Role:
Act as a senior JavaScript developer.

Task:
Debug the following discount calculation function and identify why it produces the wrong result.

Context:
The function should calculate the final price after applying a percentage-based discount.

Current Code:

```javascript
function calculateDiscount(price, discountPercent) {
  return price - discountPercent;
}
```

Test Input:
price = 200
discountPercent = 10

Expected Result:
180

Actual Result:
190

Constraints:
- Make the smallest possible change required to fix the bug.
- Do not add new features.
- Do not refactor unrelated code.
- Use plain JavaScript only.
- Keep the function simple and beginner-friendly.

Output Format:
1. Corrected JavaScript code
2. Brief explanation of what caused the bug
3. Manual test cases to verify the fix

Verification:
Explain how I can manually verify that the discount calculation is working correctly for different prices and discount percentages.

## AI Output

### 1. Corrected Code

```javascript
function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
```

### 2. Explanation

The function was performing `200 - 10 = 190` instead of calculating 10% of 200 first. The discount amount must be calculated using `price * discountPercent / 100`, and then subtracted from the original price.

For the given test case:

- 10% of 200 = 20
- 200 - 20 = 180

### 3. Suggested Manual Test Cases

```javascript
calculateDiscount(200, 10);  // 180
calculateDiscount(100, 25);  // 75
calculateDiscount(50, 50);   // 25
calculateDiscount(0, 10);    // 0
calculateDiscount(100, 0);   // 100
```

## Final Result

The discount calculation bug was successfully fixed. The function now calculates the percentage discount amount before subtracting it from the original price.

Final code:

```javascript
function calculateDiscount(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}
```


