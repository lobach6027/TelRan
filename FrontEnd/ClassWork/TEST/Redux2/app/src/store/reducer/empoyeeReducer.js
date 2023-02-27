const defaultState = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Raja" },
  { id: 3, name: "Don" },
  { id: 4, name: "Alla" },
];

export const employeeReducer = (state=defaultState, action)=>{
    if(action.type ==="ADD"){
       return[...state, {id:Date.now(),name:action.payload}] 
    }else{return state}
}