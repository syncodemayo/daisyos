import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="title">Cleothe</h1>
        
        <div className="cta-group">
          {/* Be With Me Button */}
          <button 
            className="tech-btn primary-tech"
            onClick={() => window.open('https://www.elizacloud.ai/dashboard/chat?characterId=8fee6540-2c18-401e-8cc9-48035bc67da7', '_blank')}
          >
            <div className="btn-content">
              <span>BE WITH ME</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
          </button>
          
          {/* Contract Address Box */}
          <div className="tech-box contract-box">
             <div className="contract-label">
                <span className="dot">•</span> CONTRACT ADDRESS
             </div>
             <div className="contract-value-row">
               <code className="contract-code">COMING SOON</code>
             </div>
          </div>

          {/* Enter Cleothe Button */}
          {/* <button className="tech-btn secondary-tech">
             <div className="btn-content">
              <span>ENTER CLEOTHE</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
