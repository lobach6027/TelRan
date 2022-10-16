//Думаю, что самыми удачными в чтении вариант  Function definition expression, 
//но также очень кратко и понятно Arrow function 1.

//Function declaration station

/*function checkTypeOfSomeValue(something){
    if (typeof something === "string"){
        let someString = something;
        return someString.length
    }
    if (typeof something === "number"){
        let someValue = String(something);
        return someValue.length
    }
    if (typeof something ==="boolean"){
        let someBoolean = String(something);
        return someBoolean.length
    }

    return 'неверный тип данных';
}
console.log(checkTypeOfSomeValue('Hello'));
console.log(checkTypeOfSomeValue(258));
console.log(checkTypeOfSomeValue(true));
console.log(checkTypeOfSomeValue());*/

//Function definition expression 

/*const checkTypeOfSomeValue = function(something){
    if (typeof something === "string"){
        let someString = something;
        return someString.length
    }
    if (typeof something === "number"){
        let someValue = String(something);
        return someValue.length
    }
    if (typeof something ==="boolean"){
        let someBoolean = String(something);
        return someBoolean.length
    }

    return 'неверный тип данных';
}
console.log(checkTypeOfSomeValue('Hello'));
console.log(checkTypeOfSomeValue(258));
console.log(checkTypeOfSomeValue(true));
console.log(checkTypeOfSomeValue());*/

//Arrow function 1 
/*
let checkTypeOfSomeValue = (something) => {

    if (typeof something === "string") return something.length

    if (typeof something === "number") return (String(something)).length
    
    if (typeof something ==="boolean") return (String(something)).length
 
    return 'неверный тип данных';
}
console.log(checkTypeOfSomeValue('Hello'));
console.log(checkTypeOfSomeValue(258));
console.log(checkTypeOfSomeValue(true));
console.log(checkTypeOfSomeValue());*/


//Arrow function 2
/*
let checkTypeOfSomeValue = (something) => {
    if (typeof something === "string"){
        let someString = something;
        return someString.length
    }
    if (typeof something === "number"){
        let someValue = String(something);
        return someValue.length
    }
    if (typeof something ==="boolean"){
        let someBoolean = String(something);
        return someBoolean.length
    }

    return 'неверный тип данных';
}
console.log(checkTypeOfSomeValue('Hello'));
console.log(checkTypeOfSomeValue(258));
console.log(checkTypeOfSomeValue(true));
console.log(checkTypeOfSomeValue());
*/
let checkTypeOfSomeValue = (something) => {
    return( (typeof something === "string") ? (something.length)
    : (typeof something === "number") ? ((String(something)).length)
    : (typeof something ==="boolean") ? ((String(something)).length));
   return
};

console.log(checkTypeOfSomeValue('Hello'));
console.log(checkTypeOfSomeValue(258));
console.log(checkTypeOfSomeValue(true));
console.log(checkTypeOfSomeValue());