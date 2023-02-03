function transpose(a) {
    let N;
    for (i = 0; i < N; i++) {
      for (j = 0; j < N; j++) {
        arr3[i][j] = a[j][i];
      }
    }
    document.write("Before Transpose <br>");
    for (i = 0; i < N; i++) {
      for (j = 0; j < N; j++) 
      document.write(a[i][j] + " ");
      document.write("<br>");
    }
    document.write("After Transpose <br>");
    for (i = 0; i < N; i++) {
      for (j = 0; j < N; j++) 
      document.write(arr3[i][j] + " ");
      document.write("<br>");
    }
}
transpose(arr1)