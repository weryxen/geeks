import React, {useEffect, useState} from 'react';

function MainPage(props) {
    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        setCount(count - 1)
    }
    useEffect( ()  => {
        document.title = `вы нажали ${count} раз`
    })

    return (
        <>
            <h1>{count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </>
    );
}

export default MainPage;