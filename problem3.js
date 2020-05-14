const largestPrimeFactor = (number) => {
  let largest;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) {
      largest = i;
    }
  }
  return largest;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

largestPrimeFactor(13195);
