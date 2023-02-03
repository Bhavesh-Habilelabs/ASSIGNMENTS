let a = [[1,2,3,4],[5,6,7,8],[9,0,1,2],[3,4,5,6]];
  let b = [[7,8,9,0],[1,2,3,4],[5,6,7,8],[9,0,1,2]];
  
  let n = a.length;
  let c = new Array(n);
  for (let i = 0; i < n; i++) {
    c[i] = new Array(n);
  }
  function addMetrices(arr1, arr2) {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) c[i][j] = arr1[i][j] + arr2[i][j];
  
    document.write("Result matrix is <br>");
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) document.write(c[i][j] + " ");
      document.write("<br>");
    }
  }
  
  addMetrices(a, b);