function getSum(...num){
   console.log(num.reduce((sum,prev)=>sum+prev,40)) ;
}
getSum(1,2,3);
