const num = prompt('Enter a positive number: ');

console.log("The factors are");
for(let i = 1; i <= num; i++) {
    if(num % i == 0) {
        console.log(i);
    }
}