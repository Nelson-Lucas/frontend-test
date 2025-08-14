import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Home';

describe('Home component', () => {
  it('renderiza título e botão de criação', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Monitor de Criptomoedas/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Criar nova lista/i).length).toBeGreaterThan(0);
  });

  it('navega para /criar-lista ao clicar no botão', () => {
    const TestComponent = () => <div>Você está na página de criação</div>;

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-lista" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getAllByText(/Criar nova lista/i)[0];
    fireEvent.click(button);

    expect(screen.getByText(/Você está na página de criação/i)).toBeInTheDocument();
  });

  it('renderiza o componente CryptoList', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/Binance Tracker/i)).toBeInTheDocument();
  });
});
