let a = window.prompt("Enter Number");
function OddSum(b){
    sum=0;
    for(i=0;i<=b;i++){
        if(i%2==1){
            sum+=i;
            console.log(i);
        }
    }
    console.log(sum);
}
OddSum(a);