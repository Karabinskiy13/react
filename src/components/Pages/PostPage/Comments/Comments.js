import React from 'react';
import './comment.css'

export const Comments = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className="comment">
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};