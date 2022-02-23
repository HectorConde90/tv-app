export const getRateClass = (rate: number) => {
  if (rate > 8) {
    return 'card-rate-green';
  } else if (rate > 6) {
    return 'card-rate-yellow';
  } else {
    return 'card-rate-red';
  }
};
