import React from 'react';

import './Photos.css'
export const Photos = ({photo}) => {
    const {albumId, id, title, thumbnailUrl} = photo;
    return (
        <div className='photo'>
            <div className="photoInfo">
                <div>AlbumId: {albumId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
            </div>
            <div className="img">
                <img src={thumbnailUrl} alt="icon"/>
            </div>
        </div>
    );
};