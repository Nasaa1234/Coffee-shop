export const MilkInput = [
  'Standart',
  '5% milk',
  '7% milk',
  '10% milk ',
  '30% milk',
];

export const FoamInpit = ['Extra foam', 'No foam'];

export const WhippingInput = ['No whip', 'whip'];

export const Fact = (coffee: any) => {
  if (coffee === 'Standart') {
    return '530 calories, 67g sugar, 21g fat';
  }
  if (coffee === '5% milk') {
    return '580 calories, 77g sugar, 23g fat';
  }
  if (coffee === '7% milk') {
    return '600 calories, 70g sugar, 24g fat';
  }
  if (coffee === '10% milk') {
    return '630 calories, 73g sugar, 26g fat';
  }
  if (coffee === '30% milk') {
    return '700 calories, 77g sugar, 30g fat';
  }
};
