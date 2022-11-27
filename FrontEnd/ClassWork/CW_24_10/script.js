
let num =[1,2,3,4,5,6,7,8,9,10]
num.forEach(showItem);
function showItem(item,index,arr){
    console.log("a["+index+"]=" + item);
}
num.forEach((item,index,arr) =>{
    console.log(num)
});


num.forEach((item,index,arr) =>{
    console.log("a["+index+"]=" + item)
}

)
///sum of all elements of Array
let summa  = 0;
num.forEach(item=>{
    summa+=item
});
console.log(summa)


let arr1 = [1,true,"a","",0,89];
arr1.forEach((n,i,arr1)=>{
    console.log(typeof(n), ("index = " +  i))

})


