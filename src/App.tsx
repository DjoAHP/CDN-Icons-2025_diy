import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Documentation } from './pages/Documentation';
import { IconGrid } from './components/IconGrid';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/icons" element={<IconGrid />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
