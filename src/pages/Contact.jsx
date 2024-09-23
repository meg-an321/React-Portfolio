import React from "react";
import myGif from "../assets/blu.gif";


export default function Contact() {
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
      
        <h1>Contact Page</h1>
        <p>
          This is the contact page. 
          You can reach me at <a href="mailto: [email protected]"> [email protected]</a>.
          
        </p>
        <div>
        <a href= "mailto: [email protected]">
          <img src="/src/assets/mail.png" alt="Mail Logo" style={{ width: '50px', height: '50px', marginRight: '20px' }} />
         
        </a>
        <a href="https://github.com/meg-an321">
          <img src="/src/assets/github2.png" alt="GitHub Logo" style={{ width: '90px', height: '50px' }} />
        </a>
      </div>
    </div>
    );
  }
   