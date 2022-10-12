
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

//Arrow function

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
