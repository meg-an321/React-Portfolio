import React from "react";
import myGif from "../assets/React.gif";

export default function Home() {
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
      <h1>Welcome</h1>
      <p>
        Welcome to my portfolio. This project will demonstrate React. React is a JavaScript library used for building user interfaces,
        particularly for single-page applications. It allows us developers to create reusable UI (user interface)  
        components that manage their state, making it easier to build interactive web applications.
      </p>
    </div>
  );
}
