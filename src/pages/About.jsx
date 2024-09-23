import React from "react";
import myGif from "../assets/giphy.gif";

export default function About() {
  return (
    <div style={{ 
      backgroundImage: `url(${myGif})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', // Full height of the viewport
      color: 'white', // Change text color for better visibility
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
    
      <h1>About Page</h1>
      <p>
       Hello, my name is Megan. I am a junior full stack web developer with experience in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, and React.
       I took a few courses last year during Covid-19 for fun and found that I really enjoyed coding. I am currently enrolled in a coding bootcamp to further my skills.
        I am excited to see where this journey takes me.
      </p>
    </div>
  );
}
