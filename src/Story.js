import {Avatar} from '@material-ui/core';
import React from 'react';
import './Story.css';

export default function Story({imagebackground, profileSrc, title}) {
    return (
        <div 
        style= {{backgroundImage: `url(${imagebackground})`}} 
        className="story">
            <Avatar className="avatar__story" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}
