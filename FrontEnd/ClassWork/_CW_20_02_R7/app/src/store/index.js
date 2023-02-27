import {combineReducers, createStore} from 'redux';
import { clickerReducer } from './reducer/clickerReducer';
import { taskReducer } from './reducer/taskReducer';
const rootReducer = combineReducers({
    clicler: clickerReducer,
    words: taskReducer
})

export const store = createStore(rootReducer);