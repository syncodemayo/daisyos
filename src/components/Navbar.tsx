import { useEffect, useState, type FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'mcp', 'gallery'];
      
      // Find the section that is currently most visible
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in the middle of the viewport or near top
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar-container">
      <div className="nav-pill logo-pill">
        <div className="nav-logo">
           <img src="/images/logo.png" alt="Cleothe Logo" />
        </div>
        <span className="brand-name">Cleothe</span>
      </div>

      <div className="nav-pill links-pill">
        <a 
          href="#about" 
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setActiveSection('about')}
        >
          About
        </a>
        <a 
          href="#mcp" 
          className={`nav-link ${activeSection === 'mcp' ? 'active' : ''}`}
          onClick={() => setActiveSection('mcp')}
        >
          Features
        </a>
        <a 
          href="#gallery" 
          className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
          onClick={() => setActiveSection('gallery')}
        >
          My Gallery
        </a>
        {/* <a href="#docs" className="nav-link special">
          <span>⚡ API Docs</span>
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
