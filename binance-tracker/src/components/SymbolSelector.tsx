import React, { useState } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import { SelectorContainer } from '../Styles/SymbolSelector.styles';

export const SymbolSelector = () => {
  const { addSymbol } = useWatchlist();
  const [input, setInput] = useState('');

  return (
    <SelectorContainer>
      <input
        value={input}
        onChange={e => setInput(e.target.value.toUpperCase())}
        placeholder="Ex: ETHBTC"
      />
      <button onClick={() => addSymbol(input)}>Adicionar</button>
    </SelectorContainer>
  );
};
