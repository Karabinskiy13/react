import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {userId, id, title} = album
    return (
        <div className='album'>
            <div>UserID-{userId}</div>
            <div>Id-{id}</div>
            <div>Title-{title}</div>
            <Link to={`${id.toString()}/photos`}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default Album;