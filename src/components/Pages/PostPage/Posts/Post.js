import React from 'react';
import {Link} from "react-router-dom";

export const Post = ({post}) => {
    const {id, title}= post
    return (
        <div className="post">
            <div className="postInfo">
                {id}-{title}
                <Link to={id.toString()} state={post}>
                    <button>Post Details</button>
                </Link>
            </div>
        </div>
    );
};

