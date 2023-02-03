let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

function mergeArr(arr1, arr2) {
  let len = arr2.length - 1;
  while (len > 0) {
    arr1.push(arr2[len]);
    len--;
  }
  console.log(arr1);
  bubbleSort(arr1);
}
mergeArr(arr1, arr2);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
}