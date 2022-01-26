
import React, {useEffect, useState} from 'react';

import {User} from "./User";

export const Users = ({keyWord}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [])

    return (
        <div>
            {users.filter(user => user.name.includes(keyWord.name) && user.email.includes(keyWord.email) && user.username.includes(keyWord.userName)).map(value => <User
                key={value.id}
                id={value.id}
                name={value.name}
                username={value.username}
                email={value.email}
            />)}
        </div>
    );
};