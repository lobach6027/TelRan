const defaultState = []
const ADDTOBASKET = "ADDTOBASKET_ACTION"
const INCREMENT  = "INCREMENT_ACTION"
const DECREMENT  = "DECREMENT_ACTION"
const REMOVE = "REMOVE_ACTION"
export const addToBasketAction = (payload)=>{
 return {type:ADDTOBASKET, payload }
}
export const incrementAction = (payload)=>{
  return {type:INCREMENT,payload}
 }
 export const decrementAction = (payload)=>{
  return {type:DECREMENT,payload}
 }
 export const removeAction= (payload)=>{
  return {type:REMOVE,payload}
 }

export const basketReducer = (state = defaultState, action) => {
  if (action.type === ADDTOBASKET) {
    const target = state.find(({ id }) => id === action.payload);
    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else{
      target.count++;
      return [...state];
    }}
    else if(action.type === INCREMENT){
      const target = state.find(({ id }) => id === action.payload);
      target.count++;
      return [...state]
    }
    else if(action.type === DECREMENT){
      const target = state.find(({ id }) => id === action.payload);
      target.count--;
      if(target.count===0){
        state = state.filter((item)=>item!==target)
      }else
      return [...state]
    }
    else if (action.type === REMOVE){
    return state.filter(({id})=>id!==action.payload)
    }
     else {
    return state;
  }
};
