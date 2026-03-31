import React from 'react';

const Navbar = () => {
  const links = [
    { label: 'Home', href: '#', active: true },
    { label: 'Tech', href: '#tech' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">David Ajibade</a>
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} className={l.active ? 'active' : ''}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="/David_Ajibade_Resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-resume">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
