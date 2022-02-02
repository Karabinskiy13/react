import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";
import {jsonService} from "../../../../services/json.service";

export const SinglePostPage = () => {
    const {id}= useParams()
    const {state}=useLocation()
    const [post, setPost]=useState({})

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        jsonService.getPostsById(id).then(value=>setPost(value))

    },[state,id])
    return (
        <div>
            {post && (
                <div className="singlePost">
                    <h2>Post</h2>
                    <div>UserID-{post.userId}</div>
                    <div>ID-{post.id}</div>
                    <div>Title-{post.title}</div>
                    <div>Body-{post.body}</div>
                    <Link to={'comments'}>
                        <button>Comments</button>
                    </Link>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

