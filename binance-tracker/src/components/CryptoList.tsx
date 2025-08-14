import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  Grid,
  Card,
  Symbol,
  Price,
  Pagination,
  PageButton,
  PageInfo,
  SearchInput,
  CreateListButton
} from '../Styles/CryptoList.styles';

const itemsPerPage = 16;

export const CryptoList: React.FC = () => {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const res = await fetch('https://api.binance.com/api/v3/exchangeInfo');
        const data = await res.json();
        const usdtPairs = data.symbols
          .filter((s: any) => s.symbol.endsWith('USDT'))
          .map((s: any) => s.symbol);
        setSymbols(usdtPairs);
      } catch (error) {
        console.error('Erro ao buscar símbolos da Binance:', error);
      }
    };
    fetchSymbols();
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price');
        const data = await res.json();
        const priceMap: Record<string, string> = {};
        data.forEach((item: any) => {
          priceMap[item.symbol] = item.price;
        });
        setPrices(priceMap);
      } catch (error) {
        console.error('Erro ao buscar preços da Binance:', error);
      }
    };
    fetchPrices();
  }, [symbols]);

  const filtered = symbols.filter((s) =>
    s.toLowerCase().includes(filter.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Container>
      <Title>Binance Tracker</Title>

<CreateListButton onClick={() => navigate('/criar-lista')}>
        ➕ Criar nova lista
      </CreateListButton>


      <SearchInput
        type="text"
        placeholder="🔍 Buscar moeda..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <h2 style={{ color: '#FFD700', textAlign: 'center', fontSize: '1.6rem', fontFamily: 'Poppins, sans-serif' }}>
        Principais moedas do mercado
      </h2>

      <Grid>
        {paginated.map((symbol) => (
          <Card key={symbol}>
            <Symbol>{symbol}</Symbol>
            <Price>
              {prices[symbol]
                ? `$${parseFloat(prices[symbol]).toFixed(2)}`
                : 'Carregando...'}
            </Price>
          </Card>
        ))}
      </Grid>

      <Pagination>
        <PageButton onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
          ⬅️ Anterior
        </PageButton>
        <PageInfo>Página {currentPage}</PageInfo>
        <PageButton onClick={() => setCurrentPage((p) => p + 1)}>
          Próxima ➡️
        </PageButton>
      </Pagination>
    </Container>
  );
};
