import React, {useState, useEffect, useContext} from 'react';
import { Person } from './UseContextAPI'

const Hooks = () => {

    const [data] = useContext(Person);
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Chintu");

    useEffect(() =>{
        setTimeout(()=>{
            document.title = `You clicked ${count} times`
            console.log("Use Effect ");
        },2000)
    },[count])

    return(
        <>
            <h1>{count}</h1>
            <h1>{name}</h1>

            {data.map((item, index)=>{
                return(
                    <h3 key={index}>{item.name} and age is {item.age}</h3>
                    )
            } )}
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setName("Pintu")}>Change Name</button>
        </>
    )
}

export default Hooks;