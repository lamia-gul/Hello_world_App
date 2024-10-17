"use client";

import { useState } from "react";

export default function Hi() {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-100">
        <h1 className="text 4x1 font-bold mt-4" style={{textAlign:"center"}}>
          <nav> Welcome To My App</nav>
        </h1>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="flex-glow flex justify-center items-center">
          <h2 className="text-4x1 font-bold text-center cursor-pointer" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          
              {hovered ? '👋' : 'HELLO'}
           
          </h2>

        </div>
        <footer><br/><br/><br/><br/>  Made By Lamia Gul   </footer>
    </div>

  );
  
}


