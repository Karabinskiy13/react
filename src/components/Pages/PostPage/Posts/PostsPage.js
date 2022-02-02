import React, {useEffect, useState} from 'react';
import {jsonService} from "../../../../services/json.service";
import {Post} from "./Post";
import {Outlet} from "react-router-dom";
import './posts.css'

export const PostsPage = () => {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
    jsonService.getAllPosts().then(value=>setPosts(value))
    },[posts])
    return (
        <div className="allPosts">
            <div className="posts">
                <h1>Posts</h1>
                {posts.map(post=><Post key={post.id} post={post}/> )}
            </div>
            <div className="fullPost">
            <Outlet/>
            </div>
        </div>
    );
};

