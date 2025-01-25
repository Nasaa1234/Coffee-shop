export const Tax = amount => {
  if (amount === 0) {
    return 0;
  }
  if (amount < 5) {
    return 0.45;
  }
  if (amount < 10) {
    return 0.75;
  }
  if (amount < 20) {
    return 1.25;
  }
  return 2;
};
