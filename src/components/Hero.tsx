import { useState, type FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = "5tjK9d2N1sjuU8ktmobtoTE4P2N2qrC4mKLuYpVXpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="title">daisyOS</h1>
        
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
               <code className="contract-code">{contractAddress}</code>
               <button className="copy-icon" onClick={handleCopy}>
                 {isCopied ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                 ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                 )}
               </button>
             </div>
          </div>

          {/* Enter DaisyOS Button */}
          {/* <button className="tech-btn secondary-tech">
             <div className="btn-content">
              <span>ENTER DAISYOS</span>
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
