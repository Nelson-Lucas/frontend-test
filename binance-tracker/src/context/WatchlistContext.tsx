import React, { createContext, useContext, useState } from 'react';

export type WatchlistContextType = {
  watchlist: string[]; 
  addSymbol: (symbol: string) => void; 
  removeSymbol?: (symbol: string) => void; 
};

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<string[]>([]);

  const addSymbol = (symbol: string) => {
    setWatchlist((prev) => (prev.includes(symbol) ? prev : [...prev, symbol]));
  };

  const removeSymbol = (symbol: string) => {
    setWatchlist((prev) => prev.filter((item) => item !== symbol));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addSymbol, removeSymbol }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};
