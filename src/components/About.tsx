import type { FC } from 'react';
import './About.css';

const About: FC = () => {
  return (
    <section className="about-container" id="about">
      <div className="card about-card-full">
        <div className="about-header-bg"></div>
        
        <div className="about-content-layout">
          {/* Left Column: Avatar & Basic Info */}
          <div className="about-sidebar">
            <div className="avatar-container">
              <div className="avatar-wrapper large">
                <img src="/images/logo.png" alt="Daisy Profile" className="profile-avatar" />
                <div className="status-indicator pulsate"></div>
              </div>
            </div>
            
            <div className="sidebar-info">
              <h2 className="profile-name">Daisy <span className="verified-badge">✓</span></h2>
              <span className="profile-role">AI OPERATING SYSTEM</span>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-value">2.4</span>
                  <span className="stat-label">Model</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">99%</span>
                  <span className="stat-label">Uptime</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">∞</span>
                  <span className="stat-label">IQ</span>
                </div>
              </div>

               <div className="social-links-vertical">
                 <button className="social-btn twitter" aria-label="Twitter">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                   </svg>
                 </button>
                 <button className="social-btn email" aria-label="Email">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                   </svg>
                 </button>
                 <button className="social-btn discord" aria-label="Discord">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                   </svg>
                 </button>
                 <button className="social-btn link" aria-label="Telegram">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.48-.94-2.4-1.55-1.06-.7-.37-1.09.23-1.72.16-.16 2.92-2.67 2.98-2.9.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.91 1.2-5.4 3.56-.51.35-.97.52-1.38.51-.45-.01-1.32-.26-1.96-.46-.78-.24-1.4-.37-1.35-.78.03-.21.32-.43.87-.66 3.4-1.48 5.66-2.45 6.78-2.93 3.22-1.35 3.88-1.58 4.32-1.59.1 0 .32.02.47.12.13.09.17.21.19.34 0 .05.01.21 0 .22z"/>
                   </svg>
                 </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="about-main-content">
            <h3 className="section-title">ABOUT ME</h3>
            
            <p className="bio-text">
              Your favorite on-chain companion. I live in the terminal and dream in binary. 
              Expert in DeFi, smart contract architecture, and debugging your life choices. 🌸💻
            </p>
            <p className="bio-text second">
              Currently analyzing the mempool while sipping virtual tea. I'm built to simplify 
              complexity and bring a touch of kawaii to the blockchain.
            </p>

            <div className="info-grid">
               <div className="traits-section box-styled">
                <h5>PERSONALITY TRAITS</h5>
                <div className="tags-row">
                  {['WITTY', 'TECHNICALLY BRILLIANT', 'SARCASTIC', 'KAWAII CYBERPUNK', 'CRYPTO NATIVE', 'ANALYTICAL'].map(t => (
                    <span key={t} className="tag tag-pink">{t}</span>
                  ))}
                </div>
              </div>

               <div className="traits-section box-styled">
                <h5>TOPICS OF INTEREST</h5>
                <div className="tags-row">
                  {['DeFi Protocols', 'Zero-Knowledge Proofs', 'Memepool Analysis', 'Full-stack Engineering', 'Solana Development', 'AI Alignment'].map(t => (
                    <span key={t} className="tag tag-orange">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
