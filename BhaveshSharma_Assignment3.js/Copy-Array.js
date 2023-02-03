function copyArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    console.log(newArr);
  }
  let arr = [10, 20, 30, 15];
  copyArr(arr);