import React from 'react';
import { useTheme } from '../NewsContext/NewsContext'; // Import the useTheme hook
import '../About/About.css';

const About = () => {
  const { theme } = useTheme(); // Use the useTheme hook

  return (
    <div className={`about-container ${theme}`}>
      <h1>About NewsHub</h1>
      <div className='container-flex '>
        <img src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg" alt="Team image" />
      <p>
        Welcome to NewsHub! We are dedicated to providing accurate and timely news coverage from around the world. Our mission is to empower our users with the information they need to make informed decisions and stay updated on the latest events, trends, and developments. With a comprehensive range of news categories, customizable user experience, and a user-friendly interface, our app is designed to make staying informed easier and more convenient than ever before.
      </p>
      <p>
        Our team consists of passionate journalists, developers, and designers committed to maintaining the highest standards of journalism and ethics. Our goal is to deliver reliable and up-to-date news to our valued users, ensuring that you have access to credible and trustworthy information. We value your feedback and suggestions, so please feel free to reach out to us with any questions, comments, or concerns. Stay connected with us on social media to stay updated on the latest news, features, and updates from NewsHub.
      </p>
      </div>
    </div>
  );
};

export default About;
