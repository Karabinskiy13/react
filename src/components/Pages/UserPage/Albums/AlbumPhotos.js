import React, {useEffect, useState} from 'react';
import {jsonService} from "../../../../services/json.service";
import {useParams} from "react-router-dom";
import {Photos} from "../Photos/Photos";

export const AlbumPhotos = () => {
    const [photos, setPhotos]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        jsonService.getAlbumsPhotos(id).then(value=>setPhotos(value))
    },[id,photos])
    return (
        <div>
<h2>Photos</h2>
            {photos.map(photo =><Photos key={photos.id} photo={photo}/> )}
        </div>
    );
};
