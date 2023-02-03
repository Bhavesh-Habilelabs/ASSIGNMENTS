let str = "b h a v e s h";
function trimString(str){
    var newStr = ""
    for(let i=0;i<str.length;i++){
        if(str[i] != " "){
            newStr = newStr+str[i];
        }
    }
console.log(newStr);
}
trimString(str);