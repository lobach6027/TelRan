 let array = [1,2,3,4,5,6,7,8,9];


 function deleteOrAddElement(array,index,action,addElem){
if(action === '+'){
   array.splice(index,0,addElem);
   console.log(array)
}else{
    }
array.splice(index,1)
console.log(array)
 }
 //deleteOrAddElement(array,2,'+',254)
 deleteOrAddElement(array,2,'-')
 