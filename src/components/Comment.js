import React from 'react';

export function Comment(props) {
    let {id, body, email, name} = props;
    return (
        <div>
            {id}-{body}-{email}-{name}
        </div>
    );
};