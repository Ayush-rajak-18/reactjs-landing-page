import React from 'react';
import './Landingpage.css';

const LandingPage = () => {
  return (
  
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Hii I'm Ayush Rajak</h1>
        <p className="subtitle">I am  software developer to provide the best services for your needs</p>
        <a href="https://ayush-rajak.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button className="cta-button">Contact Me</button>
</a>
       
   </header>
      <section className="features">
        <div className="feature">
          <h2>Web Development</h2>
          <p>I'm professional mern stack developer.</p>
        </div>
        <div className="feature">
          <h2>App development</h2>
          <p>I have greate experience in app development.</p>
        </div>
        <div className="feature">
          <h2>UI Design</h2>
          <p>I'm passionate UI design learner.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;