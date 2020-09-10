import {combineReducers} from 'redux'
import testingReducer from './testing'

export default combineReducers({
    testing: testingReducer
})