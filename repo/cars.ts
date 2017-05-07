import knex from './config';
import { Car } from '../types/interfaces';

async function addCar(payload: Car) : Promise<number> {
    let id = await knex('cars').insert(payload);
    return id;
}

async function deleteCar(id: number) {
    let results = await knex('cars').where('id', id).del();
    return results;
}


export {
    addCar,
    deleteCar,
}