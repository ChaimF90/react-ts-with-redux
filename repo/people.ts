import knex from './config';
import { Person } from '../types/interfaces';

async function addPerson(payload: Person) : Promise<Person> {
    let id = await knex('people').insert(payload);
    if(id) {
        payload.id = id;
    }
    return payload;
}

async function deletePerson(id: number) {
    let results = await knex('people').where('id', id).del();
    return results;
}

async function getAllPeople() :Promise<Array<Person>> {
    let people = await knex('people').select();
    return people;
}

export {
    addPerson,
    deletePerson,
    getAllPeople
}