const defaultState = []
const PRODUCTS_LOAD = 'PRODUCTS_LOAD'


export const productsLoadAction =  (payload)=>({type:PRODUCTS_LOAD,payload})

export const productsReducer = (state=defaultState, action)=>{
    if(action.type === PRODUCTS_LOAD){
        return action.payload
    }
    return state
}
