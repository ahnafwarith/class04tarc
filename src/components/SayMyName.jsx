import React, { useEffect, useState } from 'react';

const SayMyName = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count % 2 == 0) alert('EVEN')
        else alert('ODD')
    }, [count])
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