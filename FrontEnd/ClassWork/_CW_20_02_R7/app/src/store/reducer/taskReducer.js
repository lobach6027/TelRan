//export  const ADD  = "ADD"


export const taskReducer = (state = [], action)=>{
    if(action.type ==="ADD"){
        return [...state, action.payload]
    }else{
        return state
    }
}

