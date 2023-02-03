function isPrime(n) {
    if (n < 2) return false;
    if (n == 2) return true;
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  
  function nPrimes(n) {
    let primes = [];
    let i = 2;
    while (primes.length < n) {
      if (isPrime(i)) {
        primes.push(i);
      }
      i++;
    }
    return primes;
  }
  
  getSum(100);
  function getSum(n) {
    let primes = nPrimes(n);
    sum = 0;
    for (i = 0; i < primes.length; i++) {
      sum += primes[i];
    }
    console.log(sum);
  }