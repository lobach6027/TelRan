import {createStore} from 'redux'
import { clickerReducer } from './reducer/clickerDeducer'

export const store = createStore(clickerReducer)