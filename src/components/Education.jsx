import React from 'react';

const Education = () => (
  <section className="section" id="education">
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="education-entry">
        <div className="edu-dot" />
        <div>
          <p className="edu-degree">
            B.Sc. in Software Engineering{' '}
            <span className="edu-year">(Expected July 2026)</span>
          </p>
          <p className="edu-school">Babcock University</p>
          <p className="edu-desc">
            Specialising in full-stack development, mobile application architectures, and scalable UI design. Currently
            exploring cloud infrastructure and AI-driven emergency response tools.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
