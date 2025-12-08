import { useState, useEffect } from 'react'
import './Quickbar.css'

export function Quickbar() {
  const sections = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
 
  useEffect(() => {
    const handleScrollEvent = () => {
      const portfolioContent = document.querySelector('.portfolio-content');
      if (!portfolioContent) return;

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section.toLowerCase());
            break;
          }
        }
      }
    };

    const portfolioContent = document.querySelector('.portfolio-content');
    portfolioContent?.addEventListener('scroll', handleScrollEvent);
    return () => portfolioContent?.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <nav className="quickbar">
      <div className="quickbar-container">
        <span className="quickbar-logo">Pedro Rojas Molina</span>
        <div className="quickbar-center">
          <div className="quickbar-links">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section.toLowerCase())}
                className={`quickbar-link ${activeSection === section.toLowerCase() ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
        <button className="quickbar-cv-button">
            Download CV
          <svg className="cv-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
