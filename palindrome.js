const num = '121121';
const palindromeNum = (num) => {
    let i=0;
 let j= num.length-1
while(i<=j){
    if(num[i]=== num[j]){
        i++;
        j--;
    }
    else{
        return "not palindrome"
    }
}   
 return "palindrome found"
}

console.log(palindromeNum(num))
