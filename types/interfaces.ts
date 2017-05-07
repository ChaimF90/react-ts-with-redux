export interface Person {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
    cars: Array<Car>
}

export interface Car {
    id?: number;
    make: string;
    model: string;
    year: string;
}

export interface Action {
    type: string;
    payload?: any;
}

export interface AppState {
    person: Person;
}

export interface FormProps {
    person: Person;
    changeHandler: (e: any) => void;
    saveFunc: () => void;
}