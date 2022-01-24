import React, {useEffect, useState} from 'react';
import {User} from "./User";

export const Users = ({getDetails}) => {
    const[userList, setUserList]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                setUserList(users)
            })
    },[])
    return (
        <div>
            <div className='user'>
                {userList.map(value =><User key={value.id} id={value.id} name={value.name} username={value.username}
                getDetails={getDetails}/> )}
            </div>
            
        </div>
    );
};

