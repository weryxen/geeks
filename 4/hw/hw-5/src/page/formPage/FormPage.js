import React, {useState} from 'react';

function FormPage(props) {
    const [user, setUser] = useState({
        username: '',
        email: '',
        age: '',
        gender: ''
    })

    const changeInput = (e)  => {
        setUser({...user, [e.target.name]: e.target.value} )
    }

    const addUser  = (e) => {
        if (user.username.trim() === "" ) {
            console.log("заполните поле user name")
        } else if (user.email.trim() === "" ) {
            console.log("заполните поле email");
        } else if (user.age.trim() === "" ) {
            console.log("заполните поле age");
        }else {
            console.log(`Ваш username: ${user.username}\n`)
        }
            e.preventDefault()
    }

    return (
        <form action="">
            <input onChange={changeInput} type="text" placeholder="username" name="username"/>
            <input onChange={changeInput} type="email" placeholder="email" name="email"/>
            <input onChange={changeInput} type="number" placeholder="age" name="age"/>
            <select onChange={changeInput} name="gender" id="gender">
                <option value="">выберите пол</option>
                <option value="man">Man</option>
                <option value="women">Women</option>
            </select>

            <button onClick={addUser}>add</button>
            <button>clear</button>
        </form>
    );
}

export default FormPage;