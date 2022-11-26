import React, { useState } from 'react';

const SayMyName = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div onClick={() => {
            // alert(`Yo baby ${props.name}`);
            console.log(props.name)
            setCount(count + 1)
        }}>
            <h1>I am {props.name}, and {props.age} years old</h1>
            <h1>Likes: {count}</h1>
        </div>
    );
};

export default SayMyName;