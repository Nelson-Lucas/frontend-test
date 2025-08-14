import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateList } from './pages/CreateList';
import { WatchlistProvider } from './context/WatchlistContext';
import { SymbolDetail } from './pages/SymbolDetail';

const App: React.FC = () => {
  return (
    <WatchlistProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-lista" element={<CreateList />} />
          <Route path="/simbolo/:symbol" element={<SymbolDetail />} />
        </Routes>
      </Router>
    </WatchlistProvider>
  );
};

export default App;
