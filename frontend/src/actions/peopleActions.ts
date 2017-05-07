
import axios from 'axios';
import * as types from './actionTypes';
import { Person } from '../../../types/interfaces';
import { Dispatch } from 'redux';

function addPersonSuccess(person: Person) {
    return {
        type: types.ADD_PERSON_SUCCESS,
        person
    }
}

export default function savePerson(person: Person) {
    return async (dispatch: any) => {
        delete person.cars;
        let newPerson = await axios.post('/api/people/addPeron', person);
        dispatch(addPersonSuccess(person));
    }
}
