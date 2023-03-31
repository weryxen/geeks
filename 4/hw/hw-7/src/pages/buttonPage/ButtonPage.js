import React, {useEffect, useState} from 'react';

function ButtonPage(props) {

    const [status, setStatus] = useState(false)

    useEffect(() => {
        console.log("push")
    }, [status])

    function on () {
        setStatus(true)
    }

    function off() {
        setStatus(false)
    }

    return (
        <div>
            <button onClick={on}>on</button>
            <button onClick={off}>off</button>
        </div>
    );
}

export default ButtonPage;