import { render, screen, fireEvent } from '@testing-library/react';
import { WatchlistProvider, useWatchlist } from '../WatchlistContext';

function WatchlistTestComponent() {
  const { watchlist, addSymbol, removeSymbol } = useWatchlist();
  return (
    <div>
      <button onClick={() => addSymbol('BTCUSDT')}>Adicionar BTCUSDT</button>
      <button onClick={() => removeSymbol && removeSymbol('BTCUSDT')}>Remover BTCUSDT</button>
      <div data-testid="lista">{watchlist.join(',')}</div>
    </div>
  );
}

test('adiciona e remove símbolo do watchlist', () => {
  render(
    <WatchlistProvider>
      <WatchlistTestComponent />
    </WatchlistProvider>
  );
  const addBtn = screen.getByText(/adicionar btcusdt/i);
  const removeBtn = screen.getByText(/remover btcusdt/i);
  const lista = screen.getByTestId('lista');

  expect(lista).toHaveTextContent('');
  fireEvent.click(addBtn);
  expect(lista).toHaveTextContent('BTCUSDT');
  fireEvent.click(removeBtn);
  expect(lista).toHaveTextContent('');
});