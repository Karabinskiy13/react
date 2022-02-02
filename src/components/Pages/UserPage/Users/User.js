import React from 'react';
import {Link} from "react-router-dom";
import './Users.css'

export const User = ({user}) => {
    const{id, name}=user
    return (
        <div>
            <div className="user">
                <div className="userInfo">
                    {id} {name}
                </div>
                <div className="userBtn">
                    <Link to={id.toString()} state={user}>
                        <button>User Details</button>
                    </Link>
                    <Link to={`${id.toString()}/albums`}>
                        <button>Albums</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

