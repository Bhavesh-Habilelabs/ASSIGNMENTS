function removeElement(value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  removeElement(20);
  console.log(arr);