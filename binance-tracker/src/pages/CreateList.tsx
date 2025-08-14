import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  PageTitle,
  InputField,
  AddButton,
  SymbolGrid,
  SymbolCard,
  Price,
  Pagination,
  PageButton,
  BackButton,
  DeleteButton,
  ErrorMessage
} from '../Styles/CreateList.styles';

const ITEMS_PER_PAGE = 14;
const LOCAL_STORAGE_KEY = 'symbolList';

export const CreateList: React.FC = () => {
  const [input, setInput] = useState('');
  const [symbolList, setSymbolList] = useState<string[]>([]);
  const [prices, setPrices] = useState<{ [symbol: string]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const sockets = useRef<{ [symbol: string]: WebSocket }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSymbolList(parsed);
        }
      } catch (err) {
        console.error('Erro ao restaurar symbolList:', err);
      }
    }
  }, []);

  const handleAddSymbol = () => {
    const symbol = input.toLowerCase().trim();
    if (!symbol) return;

    if (symbolList.includes(symbol)) {
      setErrorMessage(`A moeda "${symbol.toUpperCase()}" já está cadastrada na lista.`);
      return;
    }

    const updatedList = [...symbolList, symbol];
    setSymbolList(updatedList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedList));
    setInput('');
    setErrorMessage('');
  };

  useEffect(() => {
    symbolList.forEach((symbol) => {
      if (!sockets.current[symbol]) {
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@ticker`);
        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setPrices((prev) => ({
            ...prev,
            [symbol]: parseFloat(data.c).toFixed(2),
          }));
        };
        sockets.current[symbol] = ws;
      }
    });

    return () => {
      Object.values(sockets.current).forEach((ws) => ws.close());
    };
  }, [symbolList]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSymbols = symbolList.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(symbolList.length / ITEMS_PER_PAGE);

  return (
    <PageContainer>
      <PageTitle>Lista de símbolos com preços em tempo real</PageTitle>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <InputField
          type="text"
          placeholder="Ex: btcusdt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <AddButton onClick={handleAddSymbol}>Adicionar símbolo</AddButton>
      </div>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <h2
  style={{
    color: '#FFD700',
    textAlign: 'center',
    fontSize: '1.6rem',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '1rem'
  }}
>
  Clique em um símbolo para ver mais detalhes!
</h2>

      <SymbolGrid>
        {paginatedSymbols.map((symbol) => (
          <SymbolCard key={symbol} onClick={() => navigate(`/simbolo/${symbol}`)}>
            <strong>{symbol.toUpperCase()}</strong>
            <Price>{prices[symbol] ? `$${prices[symbol]}` : 'Carregando...'}</Price>
            <DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                const updatedList = symbolList.filter((s) => s !== symbol);
                setSymbolList(updatedList);
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedList));
              }}
            >
              Excluir
            </DeleteButton>
          </SymbolCard>
        ))}
      </SymbolGrid>

      {totalPages > 1 && (
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              active={currentPage === i + 1}
            >
              {i + 1}
            </PageButton>
          ))}
        </Pagination>
      )}

      <BackButton onClick={() => navigate('/')}>← Voltar para Home</BackButton>
    </PageContainer>
  );
};
