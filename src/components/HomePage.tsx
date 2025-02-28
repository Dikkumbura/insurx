// import React from 'react';
import ScrollAnimation from './ScrollAnimation'; // Adjust the path as necessary
import AnimatedText from './AnimatedText'; // Import the AnimatedText component

const HomePage = () => {
  return (
    <div>
      <h1><AnimatedText>Welcome to the Home Page</AnimatedText></h1>
      {/* Use the ScrollAnimation component here */}
      <ScrollAnimation />
      <p><AnimatedText>Some other content...</AnimatedText></p>
    </div>
  );
};

export default HomePage; 