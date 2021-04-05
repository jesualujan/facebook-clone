import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post/> 
            
        </div>
    )
}

export default Feed

// https://www.youtube.com/watch?v=B-kxUMHBxNo 2:40:00