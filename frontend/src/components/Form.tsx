import * as React from 'react';
import { FormProps } from '../../../types/interfaces';

export default function Form(props: FormProps ) {
    return (
        <div>
            <input
            value={props.person.firstName}
            onChange={props.changeHandler} 
            type="text" 
            placeholder="Frist Name" 
            name="firstName" />
            <br />
            <input 
            value={props.person.lastName}
            onChange={props.changeHandler}
            type="text" 
            placeholder="Last Name" 
            name="lastName" />
            <br />
            <input 
            value={props.person.age}
            onChange={props.changeHandler}
            type="text" 
            placeholder="Age" 
            name="age" />
            <br />
            <button onClick={props.saveFunc}>Save Person</button>
        </div>
    )
}