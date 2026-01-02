import { useState, type FC } from 'react';
import MCPModal, { type MCPData } from './MCPModal';
import './MCPSection.css';

const MCPSection: FC = () => {
  const [selectedMCP, setSelectedMCP] = useState<MCPData | null>(null);
  
  // Data for Time & Date MCP
  const timeMCPData: MCPData = {
      id: 'time-mcp',
      icon: '🕒',
      title: 'Time & Date MCP',
      description: 'Get current time, timezone conversions, and date calculations. Perfect for scheduling and time-aware applications.',
      endpointUrl: 'https://www.elizacloud.ai/api/mcp/demos/time',
      configCode: `{
  "mcpServers": {
    "time-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropic/mcp-client",
        "https://www.elizacloud.ai/api/mcp/demos/time"
      ]
    }
  }
}`,
      tools: ['Current Time', 'Timezone Conversion', 'Date Formatting', 'Time Calculations']
  };



  // Data for ElizaOS Cloud MCP
  const elizaMCPData: MCPData = {
      id: 'eliza-mcp',
      icon: '☁️',
      title: 'ElizaOS Cloud MCP',
      description: 'Core ElizaOS Cloud platform MCP with credit management, AI generation, memory, conversations, and agent interaction capabilities.',
      endpointUrl: 'https://www.elizacloud.ai/api/mcp/demos/eliza',
      configCode: `{
  "mcpServers": {
    "eliza-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropic/mcp-client",
        "https://www.elizacloud.ai/api/mcp/demos/eliza"
      ]
    }
  }
}`,
      tools: ['Credit Management', 'AI Text Generation', 'Image Generation', 'Memory', 'Conversations']
  };

  // Data for Crypto Price MCP
  const cryptoMCPData: MCPData = {
      id: 'crypto-mcp',
      icon: '💰',
      title: 'Crypto Price MCP',
      description: 'Real-time cryptocurrency prices, market data, and historical charts. Supports both credits and x402 payments.',
      endpointUrl: 'https://www.elizacloud.ai/api/mcp/demos/crypto',
      configCode: `{
  "mcpServers": {
    "crypto-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropic/mcp-client",
        "https://www.elizacloud.ai/api/mcp/demos/crypto"
      ]
    }
  }
}`,
      tools: ['Live Prices', 'Market Cap Data', 'Price History', 'Token Info', 'Multi-chain Support']
  };

  // Data for Weather MCP
  const weatherMCPData: MCPData = {
      id: 'weather-mcp',
      icon: '☁️',
      title: 'Weather MCP',
      description: 'Real-time weather data, forecasts, and alerts. Supports both credits and x402 micropayments.',
      endpointUrl: 'https://www.elizacloud.ai/api/mcp/demos/weather',
      configCode: `{
  "mcpServers": {
    "weather-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropic/mcp-client",
        "https://www.elizacloud.ai/api/mcp/demos/weather"
      ]
    }
  }
}`,
      tools: ['Current Weather', '5-Day Forecast', 'Weather Alerts']
  };

  return (
    <section className="mcp-container" id="mcp">
      <h3>DaisyOS MCP</h3>
      
      <div className="mcp-grid">
        <div className="mcp-card" onClick={() => setSelectedMCP(elizaMCPData)}>
          <div className="mcp-header">
             <div className="mcp-icon eliza">☁️</div>
             <div className="mcp-title">
               <h4>ElizaOS Cloud MCP</h4>
               <span>V1.0.0 • 20 tools</span>
             </div>
             <span className="status-badge active">• ACTIVE</span>
          </div>
          
          <p className="mcp-desc">Core ElizaOS Cloud platform MCP with credit management, AI generation, memory, conversations, and agent interaction capabilities.</p>
          
          <div className="mcp-tags">
             <span>Credit Management</span>
             <span>AI Text Generation</span>
             <span>Image Generation</span>
             <span>+2 more</span>
          </div>
          
          <div className="mcp-footer">
             <span className="cost">PAY-PER-USE WITH CREDITS</span>
             <button className="arrow-btn">→</button>
          </div>
        </div>
        
        <div className="mcp-card" onClick={() => setSelectedMCP(timeMCPData)}>
          <div className="mcp-header">
             <div className="mcp-icon time">🕒</div>
             <div className="mcp-title">
               <h4>Time & Date MCP</h4>
               <span>V1.0.0 • 4 tools</span>
             </div>
             <span className="status-badge active">• ACTIVE</span>
          </div>
          
          <p className="mcp-desc">Get current time, timezone conversions, and date calculations. Perfect for scheduling and time-aware applications.</p>
          
          
          <div className="mcp-tags">
             <span>Current Time</span>
             <span>Timezone Conversion</span>
             <span>Date Formatting</span>
             <span>+1 more</span>
          </div>
          
          <div className="mcp-footer">
             <span className="cost">1 CREDIT PER REQUEST</span>
             <button className="arrow-btn">→</button>
          </div>
        </div>

        <div className="mcp-card" onClick={() => setSelectedMCP(weatherMCPData)}>
          <div className="mcp-header">
             <div className="mcp-icon weather">☁️</div>
             <div className="mcp-title">
               <h4>Weather MCP</h4>
               <span>V1.0.0 • 2 tools</span>
             </div>
             <span className="status-badge active">• ACTIVE</span>
          </div>
          
          <p className="mcp-desc">Real-time weather data, forecasts, and alerts. Supports both credits and x402 micropayments.</p>
          
          <div className="mcp-tags">
             <span>Current Weather</span>
             <span>5-Day Forecast</span>
             <span>Weather Alerts</span>
          </div>
          
          <div className="mcp-footer">
             <span className="cost">1-3 CREDITS PER REQUEST (OR X402)</span>
             <button className="arrow-btn">→</button>
          </div>
        </div>

        <div className="mcp-card" onClick={() => setSelectedMCP(cryptoMCPData)}>
          <div className="mcp-header">
             <div className="mcp-icon crypto">💰</div>
             <div className="mcp-title">
               <h4>Crypto Price MCP</h4>
               <span>V1.0.0 • 3 tools</span>
             </div>
             <span className="status-badge active">• ACTIVE</span>
          </div>
          
          <p className="mcp-desc">Real-time cryptocurrency prices, market data, and historical charts. Supports both credits and x402 payments.</p>
          
          <div className="mcp-tags">
             <span>Live Prices</span>
             <span>Market Cap Data</span>
             <span>Price History</span>
             <span>+2 more</span>
          </div>
          
          <div className="mcp-footer">
             <span className="cost">1-3 CREDITS PER REQUEST (OR X402)</span>
             <button className="arrow-btn">→</button>
          </div>
        </div>

      </div>

      <MCPModal 
        isOpen={!!selectedMCP} 
        onClose={() => setSelectedMCP(null)} 
        data={selectedMCP} 
      />
    </section>
  );
};

export default MCPSection;
