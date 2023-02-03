function captcha(giveSize,giveUpper,giveLower,giveSpecialSymbol,giveNumber){
    let str="";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let specialsym = "!@#$%^&*()<>?|}{[]\';/.,";
    let no = "1234567890";
    let str2 = "";

    if(giveUpper)
        str+=upper;

    if(giveLower)
        str+=lower;

    if(giveSpecialSymbol)
        str+=specialsym;

    if(giveNumber)
        str+=no;

    for(let i=0;i<giveSize;i++){
        let a = Math.random()*str.length;
        let i = parseInt(a);
        str2+=str.charAt(i);
    }
    return str2;
}
console.log(captcha(9,true,true,true,true));
