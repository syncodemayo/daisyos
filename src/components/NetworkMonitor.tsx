import type { FC } from 'react';
import './NetworkMonitor.css';

const NetworkMonitor: FC = () => {
    return (
        <section className="monitor-container">
            <h3 className="section-title">Live Network Monitoring</h3>
            
            <div className="monitor-grid">
                {/* Eliza Token Card */}
                <div className="token-card eliza">
                    <div className="token-header">
                        <span className="token-badge eliza-badge">★ ELIZA TOKEN</span>
                        <div className="token-info">
                            <div className="token-icon eliza-icon"></div>
                            <div className="token-names">
                                <h4>elizaOS</h4>
                                <span>$ELIZA</span>
                            </div>
                            <span className="change-negative">↓ 28.44%</span>
                        </div>
                    </div>
                    
                    <div className="address-box">
                       <span>CONTRACT ADDRESS</span>
                       <code>0x521e7...1E0...</code>
                       <button className="copy-btn">❐</button>
                    </div>
                    
                    <div className="metrics-grid">
                        <div className="metric">
                            <span className="label">🏷️ PRICE</span>
                            <span className="value">$0.00958006</span>
                        </div>
                        <div className="metric">
                            <span className="label">📊 MCAP</span>
                            <span className="value">$94.82M</span>
                        </div>
                         <div className="metric">
                            <span className="label">👥 HOLDERS</span>
                            <span className="value">5,580</span>
                        </div>
                        <div className="metric">
                            <span className="label">💸 LIQUIDITY</span>
                            <span className="value">$663.34K</span>
                        </div>
                    </div>
                </div>

                {/* Daisy Token Card */}
                <div className="token-card daisy">
                    <div className="token-header">
                         <span className="token-badge daisy-badge">★ DAISY TOKEN</span>
                         <div className="token-info">
                            <div className="token-icon daisy-icon"></div>
                            <div className="token-names">
                                <h4>Daisy ...</h4>
                                <span>$DAISY</span>
                            </div>
                             <span className="change-negative">↓ 38.15%</span>
                         </div>
                    </div>
                    
                     <div className="address-box">
                       <span>CONTRACT ADDRESS</span>
                       <code>0x...</code>
                        <button className="copy-btn">❐</button>
                    </div>
                    
                    <div className="metrics-grid">
                         <div className="metric">
                            <span className="label">🏷️ PRICE</span>
                            <span className="value">$0.06906155</span>
                        </div>
                        <div className="metric">
                            <span className="label">📊 MCAP</span>
                            <span className="value">$61.85K</span>
                        </div>
                         <div className="metric">
                            <span className="label">👥 HOLDERS</span>
                            <span className="value">543</span>
                        </div>
                        <div className="metric">
                            <span className="label">💸 LIQUIDITY</span>
                            <span className="value">$24.48K</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkMonitor;
