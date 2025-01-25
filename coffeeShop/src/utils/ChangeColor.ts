export const changeColor = (typeColor: string) => {
  if (typeColor === 'Success') {
    return '#2AA952';
  } else if (typeColor === 'Canceled') {
    return '#F01F0E';
  } else {
    return '#2F80ED';
  }
};
