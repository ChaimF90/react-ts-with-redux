import { combineReducers } from 'redux';
import people from './peopleReducer';

const appreducer = combineReducers({
    people
})

export default appreducer;