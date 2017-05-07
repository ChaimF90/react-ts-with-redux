import * as types from '../actions/actionTypes';
import { Action } from '../../../types/interfaces';

export default function peopleReducer(state = [], action: Action) {
    console.log('im in here');
    switch(action.type) {
        case types.ADD_PERSON_SUCCESS:
            return [...state, action.payload]
        default:
            return state;
    }
}