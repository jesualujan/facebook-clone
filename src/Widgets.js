import React from 'react'
// import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe  
            src="https://www.youtube.com/embed/yZPN_kxBj_k" 
            width="200" 
            height="250"
            style={{
                border:"none",
                overflow:"hidden", 
            }}
            scrolling="no"
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >
            </iframe>

           
        </div>
    )
}

export default Widgets
