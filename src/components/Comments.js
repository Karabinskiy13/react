import React, {useEffect,useState} from "react";
import {Comment} from "./Comment";


export  function Comments() {
    let [CommentList, setCommentList]=useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comment => comment.filter((item, i)=>i<10))
            .then(comments => {
                setCommentList(comments)
            })
    },[])
    return(
        <div>
            {CommentList.map(value => <Comment key={value.id} id={value.id} body={value.body} name={value.name} email={value.email}/>)}
        </div>
    )
}
