import type { FC } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import NetworkMonitor from './components/NetworkMonitor';
import MCPSection from './components/MCPSection';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import './App.css';

const App: FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="content-wrapper">
        <div className="grid-2-col">
          <About />
          <NetworkMonitor />
        </div>
        <MCPSection />
        <Gallery />
        <footer className="footer">
          © DaisyOS The First AI OS. Crafted with magic. ✨
        </footer>
      </div>
    </div>
  );
};

export default App;
