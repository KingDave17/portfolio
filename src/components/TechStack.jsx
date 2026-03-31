import React from 'react';

const icons = {
  javascript: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <rect width="24" height="24" fill="#F7DF1E" />
      <text x="23" y="23" fill="black" fontSize="10" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="end">JS</text>
    </svg>
  ),
  react: (
    <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  html: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  css: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#1572B6"/>
      <path d="M12 2.185v19.492l6.19-1.767L19.593 2.185H12z" fill="#33A9DC"/>
      <text x="12" y="15" fill="white" fontSize="12" fontWeight="900" fontFamily="Arial, sans-serif" textAnchor="middle">3</text>
    </svg>
  ),
  reactNative: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.2">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30, 12, 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90, 12, 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150, 12, 12)"/>
    </svg>
  ),
  firebase: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFCA28">
      <path d="M3.89 15.672L6.255.485C6.302.181 6.556 0 6.84 0c.284 0 .538.181.585.485l1.65 10.635 2.126-3.955c.08-.148.232-.24.402-.24.17 0 .322.092.402.24l8.604 15.96a.584.584 0 01-.219.805c-.085.05-.183.075-.283.075-.1 0-.2-.025-.284-.075L3.89 15.672z" fill="#FFA000"/>
      <path d="M3.89 15.672L5.804 3.425c.038-.242.234-.396.471-.358.12.019.22.09.273.193L12.3 22.8c.085.158.026.354-.132.439a.309.309 0 01-.154.041.312.312 0 01-.284-.183L3.89 15.672z" fill="#F4B400"/>
      <path d="M21.285 22.61L12.55 16.35l-8.66 6.26a.311.311 0 01-.439-.085.311.311 0 01.085-.439l8.66-6.26 8.735 6.26c.158.085.217.281.132.439a.311.311 0 01-.285.183z" fill="#FFCA28"/>
    </svg>
  ),
};

const TechStack = () => {
  const categories = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'JavaScript', icon: icons.javascript },
        { name: 'React', icon: icons.react },
        { name: 'HTML', icon: icons.html },
        { name: 'CSS', icon: icons.css },
      ],
    },
    {
      title: 'MOBILE',
      skills: [{ name: 'React Native', icon: icons.reactNative }],
    },
    {
      title: 'BACKEND & SERVICES',
      skills: [{ name: 'Firebase', icon: icons.firebase }],
    },
  ];

  return (
    <section className="section" id="tech">
      <div className="container">
        <div className="tech-header">
          <h2 className="section-title" style={{ marginBottom: 0 }}>Tech Stack</h2>
          <span className="tech-scroll-hint">(Scroll Along)</span>
        </div>
        
        {categories.map((cat) => (
          <div key={cat.title} className="tech-category">
            <p className="tech-category-title">{cat.title}</p>
            <div className="tech-grid">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="tech-card">
                  <span className="tech-card-icon">{skill.icon}</span>
                  <span className="tech-card-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
