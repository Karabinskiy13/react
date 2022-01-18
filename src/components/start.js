
import React from 'react';

import './starts.css'

export const Start = (props) => {
    let {name, year, patch} = props;
    return (
        <div className={'rocket'}>
            <div className="info">
                <h1>
                    {name}
                </h1>
                <h2>
                    {year}
                </h2>
            </div>
            <img src={patch} alt="patch"/>
        </div>)
};