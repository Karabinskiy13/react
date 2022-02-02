import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {jsonService} from "../../../../services/json.service";
import {Comments} from "./Comments";

export const CommentsMap = () => {
  const  [comment, setComment]=useState([])
    const{id}=useParams()
    console.log(comment)
    useEffect(()=>{
        jsonService.getCommentsById(id).then(value=>setComment(value))
    }, [id])
    console.log(comment)
    return (
        <div>
            <h2>Comments</h2>
            {comment.map(comment => <Comments key={comment.id} comment={comment}/> )}
        </div>
    );
};
