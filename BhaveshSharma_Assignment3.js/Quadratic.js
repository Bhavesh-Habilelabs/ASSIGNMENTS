function solve(a, b, c) {
    let res1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    let res2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    console.log(res1,res2);
  }
  
  function userInput(){
      let a = Number(prompt("enter value of a"));
      let b = Number(prompt("enter value of b"));
      let c = Number(prompt("enter value of c"));
      solve(a,b,c)
  }
  userInput();