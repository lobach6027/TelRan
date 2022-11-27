
let someArray = [1,2,true,false,null]
function withOutArray(array, ...deleteData){
    let filteredArray = [];
    for (let i = 0; i < deleteData.length; i++) {
        const deleteElement = array[i];
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            if(deleteElement!==element){
                filteredArray.push(element);
            }
        }
        
    }
    return filteredArray;
}
console.log(withOutArray(someArray, null,false))