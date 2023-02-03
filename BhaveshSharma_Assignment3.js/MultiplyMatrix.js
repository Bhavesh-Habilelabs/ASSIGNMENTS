function multiplyMetrices(a, b) {
    let i, j, k, N;
    for (i = 0; i < N; i++) {
      for (j = 0; j < N; j++) {
        c[i][j] = 0;
        for (k = 0; k < N; k++) 
            c[i][j] += a[i][k] * b[k][j];
      }
    }
    document.write("Result matrix is <br>");
    for (i = 0; i < N; i++) {
      for (j = 0; j < N; j++) 
        document.write(c[i][j] + " ");
      document.write("<br>");
    }
}
multiplyMetrices(a, b)