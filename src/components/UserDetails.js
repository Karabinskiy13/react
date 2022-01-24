import React, {useEffect, useState} from 'react';

 export const UserDetails = ({userId, getPosts}) => {
    let [user,setUser]=useState({})
    useEffect(()=>{
        if (userId){
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(value => value.json())
            .then(user => {
                setUser(user)
            })
    }},[userId])
    return (
        <div>
            <div className='users'>
                ID: {user.id}
                <br/>
                Name: {user.name}
                <br/>
                Username: {user.username}
                <br/>
                Email: {user.email}
                <br/>
                Phone: {user.phone}
            </div>
            <button onClick={()=>getPosts(user.id)}>Get Post</button>

        </div>
    );
};

