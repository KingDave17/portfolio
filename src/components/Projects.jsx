import React from 'react';

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'Quill AI Assistant',
    tag: 'AI / TOOLS',
    type: 'web',
    description: 'An AI-powered writing assistant built with React and the Hugging Face API. Features robust error handling, fully accessible UI, responsive CSS, and persistent draft history using localStorage.',
    image: '/quill.png',
    demo: 'https://quill-assistant.vercel.app/',
  },
  {
    id: 2,
    title: 'Burger Thief',
    tag: 'GAME',
    type: 'web',
    description: 'A fun and interactive React web application focusing on complex state management, engaging user interfaces, and dynamic rendering.',
    image: '/burger.png',
    demo: 'https://burger-thief.vercel.app/', 
  },
  {
    id: 3,
    title: 'Warm Bliss Hotel',
    tag: 'FULL-STACK',
    type: 'web',
    description: 'Full-stack hotel management prototype with custom modular auth, Jasmine unit testing, and payment portal logic.',
    image: '/hotel.png',
    demo: 'https://warm-bliss-hotel-react.vercel.app/',
  },
  {
    id: 4,
    title: 'CHRONOS Temporal Booking',
    tag: 'E-COMMERCE / UX',
    type: 'web',
    description: 'A premium, fully-accessible luxury time travel booking agency. Features dynamic filtering, custom glassmorphism cart state management, and robust ARIA integrations.',
    image: '/chronos.png',
    demo: 'https://chronos-sage.vercel.app/',
  }
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Projects</h2>
          <div className="projects-accent" />
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-body">
                <div className="project-title-row">
                   <h3 className="project-title">{p.title}</h3>
                   <span className="project-tag">{p.tag}</span>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-links">
                  <a 
                    href={p.demo} 
                    className="btn-ghost" 
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
