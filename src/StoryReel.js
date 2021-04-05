import React from "react";
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyreel">
      <Story 
      imagebackground="https://i.postimg.cc/fLBb589L/d6pjfk2uiaatfdt-crop1580948406771-jpg-943222218.jpg"
      profileSrc="https://i.postimg.cc/fLHxXT2V/descargar.jpg" 
      title="Pancho" />

      <Story 
      imagebackground="https://i.postimg.cc/rsxSD6Hb/descargar-2.jpg" 
      profileSrc="https://i.postimg.cc/5tQj4BTK/descargar.png" 
      title="Batman" />

      <Story 
      imagebackground="https://i.postimg.cc/ZqfRxf3q/images-1.jpg" 
      profileSrc="https://i.postimg.cc/9fWNV0sS/descargar.jpg" 
      title="Biden" />

      <Story 
      imagebackground="https://i.postimg.cc/wjKjW8n3/images.jpg" 
      profileSrc="https://i.postimg.cc/N0DTqjwd/descargar-1.jpg" 
      title="Changoleon" />

      <Story 
      imagebackground="https://i.postimg.cc/ZqfRxf3q/images-1.jpg" 
      profileSrc="https://i.postimg.cc/TYkPnNXH/descargar-3.jpgg" 
      title="trump" />
    </div>
  );
}

export default StoryReel;
