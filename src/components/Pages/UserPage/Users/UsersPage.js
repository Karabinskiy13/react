import React, {useEffect, useState} from 'react';
import {jsonService} from "../../../../services/json.service";
import {User} from "./User";
import {Outlet} from "react-router-dom";
import './Users.css'

export const UsersPage = () => {
    const [users, setUsers]=useState([])
    useEffect(()=>{
        jsonService.getAllUsers().then(value=> setUsers(value))
    },[])

    return (
        <div>
            <div className='UsersAll'>
                <div className="users">
                    <h1>Users</h1>
                    {users.map(user=>< User key={user.id} user={user}/> )}
                </div>
                    <Outlet/>
            </div>
            
        </div>
    );
};

