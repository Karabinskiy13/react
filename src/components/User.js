import React from 'react';

export const User = (props) => {
    let{id, name, username, getDetails}=props
    return (
        <div>
            {id}-{name}-{username}
            <button onClick={() => {getDetails(id)}}>Get Details</button>
        </div>
    );
};

