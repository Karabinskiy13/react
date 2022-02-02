import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {jsonService} from "../../../../services/json.service";
import {UserPost} from "./UserPost";

export const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    useEffect(() => {
        jsonService.getPostsByUserId(id).then(value => setPosts(value))
    }, [id])
    return (
        <div>
            <h2>User Posts</h2>
            {posts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

