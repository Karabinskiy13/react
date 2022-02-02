import React from 'react';

export const UserPost = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div className='post'>
            <div>Id-{id}</div>
            <div>UserID-{userId}</div>
            <div>Title-{title}</div>
            <div>Body-{body}</div>
        </div>
    );
};

