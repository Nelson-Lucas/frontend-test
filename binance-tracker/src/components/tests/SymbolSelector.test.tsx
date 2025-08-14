import { render, screen, fireEvent } from '@testing-library/react';
import { SymbolSelector } from '../SymbolSelector';

let mockAddSymbol = jest.fn();
jest.mock('../../context/WatchlistContext', () => ({
  useWatchlist: () => ({
    addSymbol: mockAddSymbol,
  }),
}));

beforeEach(() => {
  mockAddSymbol = jest.fn();
});

test('renderiza input e botão, permite digitar e clicar', () => {
  render(<SymbolSelector />);
  const input = screen.getByPlaceholderText(/ex: ethbtc/i);
  const button = screen.getByRole('button', { name: /adicionar/i });

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'btcusdt' } });
  expect(input).toHaveValue('BTCUSDT');

  fireEvent.click(button);
  expect(mockAddSymbol).toHaveBeenCalledWith('BTCUSDT');
});