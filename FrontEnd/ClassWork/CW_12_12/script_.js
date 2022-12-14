/*fetch('https://fakestoreapi.com/products/10000000')
    .then(resp => {console.log(resp) 
        return resp.json()},
        err=>{console.log(err)})
    .then(data=>console.log(data),()=>{
        console.log('json parse error');
    })
*/
const promise = new Promise((resolve, rejecte) => {
  const rand_value = Math.random();
  if (rand_value > 0.5) {
    resolve(rand_value);
  } else {
    rejecte(rand_value);
  }
});

promise.then(
  (value) => console.log(`resolve: ${value}`),
  (value) => console.log(`rejecte: ${value}`)
);
