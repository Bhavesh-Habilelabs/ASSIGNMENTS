function revArray(arr){
    let newArr = []
    for(i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    console.log(newArr);
}
revArray(arr);