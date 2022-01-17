import React, {useEffect,useState} from "react";

import Post from "./Post";

export  function Posts() {
    let [PostList, setPostList]=useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => posts.filter((item, i)=>i<10))
            .then(posts => {
                setPostList(posts)
            })
    },[])
    return(
        <div>
            {PostList.map(value => <Post key={value.id} id={value.id} userid={value.userid} title={value.title} body={value.body}/>)}
        </div>
    )
}


