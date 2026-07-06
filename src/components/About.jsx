import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section className="section" id="about">
    <div className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.div 
        className="about-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p>
          I am a Frontend Engineer deeply focused on building scalable, resilient applications. With a strong foundation in Software Engineering, I understand how robust systems are architected under the hood, and I channel that exact mindset directly into the frontend.
          <br /><br />
          I have a simple philosophy: getting code to work on localhost is only half the job. True engineering comes from knowing why it works, how it performs under load, and how to track down the invisible bottlenecks that cause things to break.
          <br /><br />
          While I have a strong fundamental knowledge in vanilla JavaScript, HTML, and CSS, my current drive is building complex, data-heavy applications using React, React Native, and strict TypeScript.
          <br /><br />
          When I build an interface, I don't just want it to look good; I want it to be highly resilient. I focus heavily on:
          <br /><br />
          ⚡ <strong>Architecture & Performance:</strong> Tracking down unnecessary background re-renders, managing complex global state, and writing strictly-typed code so the app doesn't crash when a user does something unexpected.<br />
          ⚡ <strong>Cross-Platform Engineering:</strong> Taking core React concepts and applying them to mobile environments to build products with genuine, real-world value.<br />
          ⚡ <strong>Inclusive Accessibility:</strong> Building interfaces with proper keyboard navigation and screen-reader support from day one.
          <br /><br />
          I genuinely enjoy the problem-solving process, and I'm currently looking for a team where I can continue to build, break, and fix things that matter.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
