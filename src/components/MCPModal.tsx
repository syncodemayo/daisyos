import { useState, useEffect, useRef, type FC } from 'react';
import { createPortal } from 'react-dom';
import './MCPModal.css';

export interface MCPData {
    id: string;
    icon: string; // Emoji or image URL
    title: string;
    description: string;
    endpointUrl: string;
    configCode: string;
    tools: string[];
}

interface MCPModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: MCPData | null;
}

const MCPModal: FC<MCPModalProps> = ({ isOpen, onClose, data }) => {
    const [testOutput, setTestOutput] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [copyStatus, setCopyStatus] = useState(false);

    const [configCopyStatus, setConfigCopyStatus] = useState(false);
    const [responseCopyStatus, setResponseCopyStatus] = useState(false);

    // Drag-to-dismiss logic
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const startY = useRef(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setDragOffset(0); // Reset drag offset on open
            setHasInteracted(false); // Reset interaction state
        } else {
            document.body.style.overflow = 'unset';
            setTestOutput(null); // Reset on close
        }
        return () => {
             document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handlePointerDown = (e: React.PointerEvent) => {
        e.preventDefault(); // Prevent text selection/scrolling
        setIsDragging(true);
        setHasInteracted(true);
        startY.current = e.clientY;
        (e.target as Element).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const currentY = e.clientY;
        const diff = currentY - startY.current;
        // Allow moving back up to 0, but not negative
        setDragOffset(Math.max(0, diff)); 
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        if (!isDragging) return;
        setIsDragging(false);
        (e.target as Element).releasePointerCapture(e.pointerId);
        
        if (dragOffset > 150) { // Threshold to dismiss
            onClose();
        } else {
            setDragOffset(0); // Snap back
        }
    };

    if (!isOpen || !data) return null;

    const handleCopy = (text: string, type: 'url' | 'config' | 'response' = 'url') => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        if (type === 'config') {
            setConfigCopyStatus(true);
            setTimeout(() => setConfigCopyStatus(false), 2000);
        } else if (type === 'response') {
            setResponseCopyStatus(true);
            setTimeout(() => setResponseCopyStatus(false), 2000);
        } else {
            setCopyStatus(true);
            setTimeout(() => setCopyStatus(false), 2000);
        }
    };

    const handleTestConnection = async () => {
        setIsLoading(true);
        setTestOutput(null);
        try {
            // Use the local proxy to bypass CORS during development
            // We replace the actual domain with our proxy path
            const proxyUrl = data.endpointUrl.replace('https://www.elizacloud.ai', '/mcp-proxy');
            
            const response = await fetch(proxyUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const contentType = response.headers.get("content-type");
            let result;
            
            if (contentType && contentType.includes("application/json")) {
                const json = await response.json();
                result = JSON.stringify(json, null, 2);
            } else {
                result = await response.text();
            }

            if (!response.ok) {
                 setTestOutput(`Error: ${response.status} ${response.statusText}\n${result}`);
            } else {
                setTestOutput(result);
            }
        } catch (error) {
            setTestOutput(`Connection Failed: ${(error as Error).message}\n\n(Note: If this is a CORS error, the API might not allow direct browser access.)`);
        } finally {
            setIsLoading(false);
        }
    };

    const CopyIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    );

    const CheckIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    );



    return createPortal(
        <div className="mcp-modal-overlay" onClick={onClose}>
            <div 
                className="mcp-modal-content" 
                onClick={e => e.stopPropagation()}
                style={{ 
                    // If user has interacted, we take full control of transform/animation to prevent CSS conflicts
                    // and re-triggering the entrance animation
                    animation: hasInteracted ? 'none' : undefined,
                    transform: hasInteracted ? `translateY(${dragOffset}px)` : undefined,
                    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' 
                }}
            >
                <div 
                    className="modal-handle"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                ></div>
                
                <div className="mcp-modal-inner">
                    <div className="modal-header">
                        <div className={`modal-icon-wrapper type-${data.id.split('-')[0]}`}>
                            <div className="modal-icon">{data.icon}</div>
                        </div>
                        <div>
                            <h2 className="modal-title">{data.title}</h2>
                            <p className="modal-description">{data.description}</p>
                        </div>
                    </div>

                    <div className="modal-section">
                        <label className="section-label">❯ MCP ENDPOINT URL</label>
                        <div className="endpoint-box">
                            <code className="endpoint-url">{data.endpointUrl}</code>
                            <button className="copy-btn-modal" onClick={() => handleCopy(data.endpointUrl, 'url')}>
                                {copyStatus ? <CheckIcon /> : <CopyIcon />}
                            </button>
                        </div>
                    </div>

                    <div className="split-view">
                        <div className="split-col">
                            <div className="col-header">
                                <label className="section-label">&lt;/&gt; CLAUDE DESKTOP CONFIG</label>
                                <button className="icon-btn" onClick={() => handleCopy(data.configCode, 'config')}>
                                    {configCopyStatus ? <CheckIcon /> : <CopyIcon />}
                                </button>
                            </div>
                            <div className="code-block-wrapper">
                                <pre className="code-block">
                                    <code>{data.configCode}</code>
                                </pre>
                            </div>
                            <div className="action-row">
                                <button className="test-btn" onClick={handleTestConnection} disabled={isLoading}>
                                    <span className="console-icon"></span>
                                    {isLoading ? 'Connecting...' : 'Test Connection'}
                                </button>
                                <button className="docs-btn" onClick={() => window.open('https://modelcontextprotocol.io/docs/getting-started/intro', '_blank')}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    Docs
                                </button>
                            </div>
                        </div>

                        <div className="split-col">
                            <div className="col-header">
                                <label className="section-label">⊟ SERVER RESPONSE</label>
                                <button className="icon-btn" onClick={() => handleCopy(testOutput || '', 'response')} disabled={!testOutput}>
                                    {responseCopyStatus ? <CheckIcon /> : <CopyIcon />}
                                </button>
                            </div>
                            <div className="response-block">
                                {testOutput ? (
                                    <pre className="code-block response-content">
                                        <code>{testOutput}</code>
                                    </pre>
                                ) : (
                                    <div className="empty-state">
                                        <div className="empty-icon">&gt;_</div>
                                        <span>RUN TEST CONNECTION FOR SERVER RESPONSE</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <label className="section-label">⚡ AVAILABLE TOOLS ({data.tools.length})</label>
                        <div className="tools-list">
                            {data.tools.map((tool, index) => (
                                <span key={index} className="tool-tag">{tool}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default MCPModal;
