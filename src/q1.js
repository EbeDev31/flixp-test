let sum = (arr) => {
    let total = 0
    for (n of arr) {
        if (checkEvenNum(n)) { total += n }
    }
    return total
}

let checkEvenNum = (num) => {
    if((num!==null)&&(num%2===0))
    { 
      
     return (num%2===0)?true:false}
   
}

let arr = [2, 3, 4, null, 6, 'a', 3]
console.log(sum(arr))