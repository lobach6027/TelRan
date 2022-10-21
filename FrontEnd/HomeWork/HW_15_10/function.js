//Задача для тех, кто хочет испытать свои силы (необязательная)  
//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число(например 5025) 
//и возвращает сумму его цифр (в данном примере возвращаемое из функции значение будет 12).

//Думаю, что если посидеть, можно придумать, что-то попроще...
//моя первоначальная идея перевести число в строку, разбить на символы, перевести символы в числа и найти суму. Но реализовать не удалось(

/*let digit;
function getDigitsSum(digit){
    
    let first = Math.floor(digit/1000);
    let restOne = digit%1000;
    let second = Math.floor((restOne)/100);
    restTwo = (restOne)%100;
    let third = Math.floor(restTwo/10);
    let forth = restTwo%10

    let sum = first + second + third + forth
    return sum;
    }
    console.log(getDigitsSum(5025))
    console.log(getDigitsSum(5005))
    console.log(getDigitsSum(5000))
    console.log(getDigitsSum(5555))*/


    let getDigitsSum = (digit) =>{
        let digitStr = String(digit);
        let sum = 0; 

for(let i=0; i<digitStr.length;i++){
    
sum += Number(digitStr[i]);
}
return sum;
    };
    console.log(getDigitsSum(5025))


    for(let i=0; i<=2022; i++){
        if (getDigitsSum(i)===13){
            console.log(i)
        }

    }
    let checkYear = (startYear, endYear,checkSum)=>{
        let yearsArray = [];
        for(let i = startYear; i <= endYear; i++){
            if (getDigitsSum(i)===checkSum){
                yearsArray.push(i);
            }
    }
return yearsArray;
}
    console.log(checkYear(0,1000,13))