const defaultState = [{ id: 12, count: 1 }];

export const basketReducer = (state = defaultState, action) => {
  if (action.type === "ADDTOBASKET") {
    const target = state.find(({ id }) => id === action.payload);
    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else{
      target.count++;
      return [...state];
    }}
    else if(action.type === "INC"){
      const target = state.find(({ id }) => id === action.payload);
      target.count++;
      return [...state]
    }
    else if(action.type === "DEC"){
      const target = state.find(({ id }) => id === action.payload);
      target.count--;
      if(target.count===0){
        state = state.filter((item)=>item!==target)
      }else
      return [...state]
    }
     else {
    return state;
  }
};
