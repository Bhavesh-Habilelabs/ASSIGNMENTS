function average_5() {
    let a = [];
    sum = 0;
    for (i = 0; i < 5; i++) {
      a[i] = Math.floor(Math.random() * 50);
      sum += a[i];
    }
    console.log(sum / 5);
  }
  average_5();