import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";
import {jsonService} from "../../../../services/json.service";
import Album from "./Album";

export const UsersAlbums = () => {
    const [albums, setAlbums]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        jsonService.getUserAlbums(id).then(value=> setAlbums(value))
    },[id])
    return (
        <div>
            <h2>Albums</h2>
            {albums.map(album=><Album key={album.id} album={album}/> )}
            <Outlet/>
        </div>
    );
};

