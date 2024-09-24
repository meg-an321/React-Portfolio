import React from "react";
import myGif from "../assets/giphy.gif";
import myImage from "../assets/employee.png"; // Add your image here

export default function About() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleImage = () => {
    setIsOpen(!isOpen);
  };
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
      <p>Click Image!</p>
      <img src={myImage} 
      alt="Description of my image" 
      style={{ 
        width: isOpen ? '600px' : '300px',
        height: 'auto',
        cursor: 'pointer',
      }}
      onClick={toggleImage}/>
      <p>
        This image is an example of an employee tracker that I created using PostgreSQL.
      </p>
    </div>
  );
}
