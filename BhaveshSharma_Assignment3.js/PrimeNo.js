function isPrime(n) {
    if (n < 2) 
        return false;

    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) 
        return false;
    }
    return true;
}

let count1= 100;
for (let i = 1; i <= count1; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}