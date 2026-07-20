function calculateDiscount(price, discountPercent) {
  if (typeof price !== 'number' || typeof discountPercent !== 'number') {
    return null;
  }

  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    return null;
  }

  return price - (price * discountPercent) / 100;
}