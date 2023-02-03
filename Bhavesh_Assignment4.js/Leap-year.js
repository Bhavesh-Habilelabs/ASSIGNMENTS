function isLeapYear(year) {    
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}
const year = prompt('Enter a year:');
console.log(isLeapYear(year));