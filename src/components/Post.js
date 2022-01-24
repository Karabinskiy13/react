import React from 'react';

export const Post = (props) => {
    let {userId, id, title, body}= props
    return (
        <div>
            {userId}
            <br/>
            {id}
            <br/>
            {title}
            <br/>
            {body}
        </div>
    );
};

