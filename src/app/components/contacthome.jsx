import React from "react";
import Image from "next/image";
import BackgroundImage from "/public/sinkRunning.jpg"; // Replace with your image path

export default function ContactHome() {
  return (
    <div className="relative h-screen"> 
      <Image
        src={BackgroundImage}
        alt="Contact Background"
        className="object-cover w-full h-1/2"
        
        priority
      />
      
      
    </div>
  );
}
