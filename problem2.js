function fiboEvenSum(n) {
  let fibonacciNums = [1, 2];
  let sum = 0;

  for (let i = 0; i < n - 2; i++) {
    fibonacciNums.push(fibonacciNums[i] + fibonacciNums[i + 1]);
  }

  for (let i = 0; i < fibonacciNums.length; i++) {
    if (fibonacciNums[i] <= n && fibonacciNums[i] % 2 === 0) {
      sum += fibonacciNums[i];
    }
  }

  return sum;
}

console.log(fiboEvenSum(10));
