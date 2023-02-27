const fn = n =>{
    for (let index = 2; index <= n; index = index+2) {
        
        console.log(index*index*index)
    }
    return
}
console.log(fn(7))
console.log(fn(12))