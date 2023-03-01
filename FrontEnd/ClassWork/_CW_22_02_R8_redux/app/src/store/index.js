import {createStore} from 'redux'
import { clickerReducer } from './reducer/clickerDeducer'
import { combineReducers } from 'redux'
import { basketReducer } from './reducer/basketReducer'


const rootReducer = combineReducers({
    products: clickerReducer,
    basket:basketReducer
 })
export const store = createStore(rootReducer)