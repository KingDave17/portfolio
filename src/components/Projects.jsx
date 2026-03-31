import React, { useState } from 'react';
import { X } from 'lucide-react';
import TuraFlow from './TuraFlow';

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

const projects = [
  {
    id: 3,
    title: 'Warm Bliss Hotel',
    tag: 'HOSPITALITY',
    type: 'web',
    description: 'Bespoke full-stack hotel management prototype with custom modular auth, Jasmine unit testing, and payment portal logic.',
    image: '/host-management.png',
    demo: 'https://warm-bliss-hotel-react.vercel.app/',
  },
  {
    id: 2,
    title: 'TouringApp',
    tag: 'TRAVEL',
    type: 'mobile',
    description: 'Comprehensive mobile travel companion designed with React Native, integrated location services, and biometric authentication.',
    image: '/touring-app.png',
    demo: '#tura-demo',
  },
];

const Projects = () => {
  const [isTuraOpen, setIsTuraOpen] = useState(false);

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
                  {p.title === 'TouringApp' ? (
                    <button 
                      onClick={() => setIsTuraOpen(true)} 
                      className="project-link-icon" 
                      title="Watch Interactive Demo"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      <PlayIcon />
                    </button>
                  ) : (
                    <a 
                      href={p.demo} 
                      className="project-link-icon" 
                      title={p.type === 'web' ? 'Live Demo' : 'Watch Video Demo'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.type === 'web' ? <ArrowUpRight /> : <PlayIcon />}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isTuraOpen && (
        <div className="modal-overlay" onClick={() => setIsTuraOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsTuraOpen(false)}>
              <X size={20} />
            </button>
            <TuraFlow />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
