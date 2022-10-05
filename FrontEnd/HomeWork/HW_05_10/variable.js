//Сравнить две константы двумя разными способами: 
//- Создать две константы, присвоив одной значение строкового типа, а второй числового
//- Сравнить эти константы и вывести в консоль результат типа boolean так, чтобы
//в одном случае ( == ) он был true, а в другом ( === ) false


let const1 = "";
let const2 = 0;
comparResult = (const1 == const2);
console.log(comparResult);


const1 = "";
const2 = 0;
comparResult = (const1 === const2);
console.log(comparResult);


/*Second level: Реализовать решение задачи в JS: 
            - У нас есть 100 (создать константу)
            - Цена помидоров на рынке - 10 (создать константу)
            - Цена огурцов на рынке - 5 (создать константу)
            - Цена яблок на рынке - 15 (создать константу)
            - Оставшиеся деньги потратим на орехи (создать переменную)


        - Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
        - оставшиеся деньги потратили на орехи (присвоить значение переменной)

        - сколько денег мы потратили на орехи? (вывести переменную в консоль)
        - на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)


        - в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
        выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'*/

        let pricePerKiloTomato = 10;
        let pricePerKiloCucumber = 5;
        let pricePerKiloApple = 15;
        let cash = 100;
        let restForNuts;

        let buyFrutsVeget = (pricePerKiloCucumber+pricePerKiloTomato+pricePerKiloApple)*2;
        restForNuts = cash - buyFrutsVeget;
        console.log('money to buy nuts ' + restForNuts);

        let diff = (restForNuts>buyFrutsVeget);
        console.log('restForNuts > buyFrutsVeget ' + diff);

        if (restForNuts > buyFrutsVeget){
            console.log('You spent more money to buy nuts')
        }else{
            console.log('You spent more money to buy fruts and vegetables')
        }






