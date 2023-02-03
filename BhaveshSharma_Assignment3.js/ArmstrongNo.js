function isArmstrong(n) {
    let sum = 0;
    let temp = n;
    while (n > 0) {
      let rem = n % 10;
      sum += rem * rem * rem;
      n=Math.floor(n/10);
    }
    if(temp==sum) return true;
  }
  
  let count = 1000;
  for (let i = 1; i <= count; i++) {
    if (isArmstrong(i)) {
      console.log(i);
    }
  }