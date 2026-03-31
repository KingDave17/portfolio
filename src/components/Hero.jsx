import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1 className="hero-heading">Hi, I'm <span style={{ color: '#38bdf8' }}>David.</span></h1>
            <p className="hero-sub">Software Developer.</p>
            <p className="hero-desc">
              Final year student graduating this July. Passionate about building clean, scalable
              full-stack web and mobile applications.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-ghost">Contact Me</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src="/dave.jpeg" alt="David's portrait" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
