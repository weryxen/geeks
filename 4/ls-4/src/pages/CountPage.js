import React, {useState} from 'react';

function CountPage() {
    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1 )
    }
    const minus = () => {
        setCount(count - 1)
        if(count <= 0) {
            setCount(count)
        }
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </>
    );
}

export default CountPage;