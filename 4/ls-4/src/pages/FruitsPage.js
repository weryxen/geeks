import React, {useState} from 'react';
import UsersList from "../comps/UsersList";

function FruitsPage(props) {
    const [fruits, setFruits] = useState([])

    const usersFromBAck = [
        {
            id: 1,
            name: "very good",
            price: 222,
        },
        {
            id: 2,
            name: "very ",
            price: 13,
        },        {
            id: 3,
            name: "ver",
            price: 1314,
        }

    ]
    const getFruits = () => {
        // setFruits(["apple", "mango", "banana"])
        setFruits(usersFromBAck)
    }

    return (
        <>
            <h1>Fruits </h1>
            <button onClick={getFruits}>click</button>
            <UsersList fruitsList={fruits}/>
        </>
    );
}

export default FruitsPage;