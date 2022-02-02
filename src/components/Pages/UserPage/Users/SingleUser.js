import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet, Link} from "react-router-dom";
import {jsonService} from "../../../../services/json.service";
import './Users.css'

export const SingleUser = () => {
    const {id}=useParams()
    const [user, setUser]=useState({})
    const {state}=useLocation()

    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
        jsonService.getUserById(id).then(value=> setUser(value))
    },[id, state])

    return (
        <div>
            {user && (
                <div className="singleUser">
                    <h2>User</h2>
                    <div className="userId">User ID-{user.id}</div>
                    <div className="name">Name-{user.name}</div>
                    <div className="userName">UserName-{user.username}</div>
                    <div className="Email">Email-{user.email}</div>
                    <div className="phone">Phone-{user.phone}</div>
                    <Link to={'posts'}><button>Posts</button></Link>
                    <Outlet/>
                </div>
            )}
        </div>
    );
};

