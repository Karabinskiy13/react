import React from 'react';

export const User = (props) => {
    let {id,name, username, email}= props
    return(
        <div>
            {id}--{name}--{username}--{email}
        </div>
)
    ;
};
