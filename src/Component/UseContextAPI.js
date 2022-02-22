import React, {createContext, useState} from 'react';

export const Person = createContext();

export const UseContextAPI = (props) => {

    const data = useState([
        {
            name : "Ravi",
            age : 23,
        },
        {
            name : "Shyam",
            age : 31
        }
    ])

    return(
        <Person.Provider value={data}>
            {props.children}
        </Person.Provider>
    )
}
