import {combineReducers, createStore} from 'redux'
import {countReducer } from './reducer/countReducer'
import { employeeReducer } from './reducer/empoyeeReducer'

let rootReducer = combineReducers({
count: countReducer,
empl: employeeReducer
})


export const store = createStore(rootReducer)