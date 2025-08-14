import { render, screen } from '@testing-library/react';
import { CryptoList } from '../CryptoList';
import { MemoryRouter } from 'react-router-dom';

beforeEach(() => {
  global.fetch = jest.fn((url: string) => {
    if (url.includes('exchangeInfo')) {
      return Promise.resolve({
        json: () => Promise.resolve({ symbols: [{ symbol: 'BTCUSDT' }] }),
      });
    }
    if (url.includes('ticker/price')) {
      return Promise.resolve({
        json: () => Promise.resolve([{ symbol: 'BTCUSDT', price: '60000.00' }]),
      });
    }
    return Promise.reject(new Error('Unknown endpoint'));
  }) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

test('exibe título, busca e símbolo', async () => {
  render(
    <MemoryRouter>
      <CryptoList />
    </MemoryRouter>
  );
  expect(screen.getByText(/Binance Tracker/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Buscar moeda/i)).toBeInTheDocument();
  expect(await screen.findByText('BTCUSDT')).toBeInTheDocument();
});