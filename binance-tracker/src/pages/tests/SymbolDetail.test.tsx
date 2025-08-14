import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SymbolDetail } from '../SymbolDetail';
import { within } from '@testing-library/react';

class MockWebSocket {
  url: string;
  onmessage: ((event: { data: string }) => void) | null = null;
  constructor(url: string) {
    this.url = url;
    setTimeout(() => {
      this.onmessage?.({
        data: JSON.stringify({
          e: '24hrTicker',
          E: 123456789,
          s: 'BTCUSDT',
          p: '100.00',
          P: '5.00',
          w: '200.00',
          x: '300.00',
          c: '400.00',
          Q: '0.5',
          b: '399.00',
          B: '1.2',
          a: '401.00',
          A: '0.8',
          o: '350.00',
          h: '450.00',
          l: '340.00',
          v: '1000',
          q: '400000',
          O: 111111,
          C: 222222,
          F: 1,
          L: 100,
          n: 99,
        }),
      });
    }, 100);
  }
  close() {}
}

global.WebSocket = MockWebSocket as any;

describe('SymbolDetail component', () => {
  it('renderiza título com símbolo da URL', () => {
    render(
      <MemoryRouter initialEntries={['/simbolo/btcusdt']}>
        <Routes>
          <Route path="/simbolo/:symbol" element={<SymbolDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Detalhes de BTCUSDT/i)).toBeInTheDocument();
  });

  it('exibe mensagem de carregamento antes dos dados', () => {
    render(
      <MemoryRouter initialEntries={['/simbolo/btcusdt']}>
        <Routes>
          <Route path="/simbolo/:symbol" element={<SymbolDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Carregando dados/i)).toBeInTheDocument();
  });

it('renderiza dados recebidos via WebSocket', async () => {
  render(
    <MemoryRouter initialEntries={['/simbolo/btcusdt']}>
      <Routes>
        <Route path="/simbolo/:symbol" element={<SymbolDetail />} />
      </Routes>
    </MemoryRouter>
  );

  const container = await screen.findByText(/💰 Último preço:/i);
  const parent = container.closest('div'); // assume que o valor está no mesmo <div>
  expect(within(parent!).getByText('400.00')).toBeInTheDocument();
});

  it('navega para Home ao clicar no botão correspondente', () => {
    const HomeMock = () => <div>Você está na Home</div>;

    render(
      <MemoryRouter initialEntries={['/simbolo/btcusdt']}>
        <Routes>
          <Route path="/simbolo/:symbol" element={<SymbolDetail />} />
          <Route path="/" element={<HomeMock />} />
        </Routes>
      </MemoryRouter>
    );

    const homeButton = screen.getByText(/Voltar para Home/i);
    fireEvent.click(homeButton);

    expect(screen.getByText(/Você está na Home/i)).toBeInTheDocument();
  });

  it('navega para Lista ao clicar no botão correspondente', () => {
    const ListaMock = () => <div>Você está na Lista</div>;

    render(
      <MemoryRouter initialEntries={['/simbolo/btcusdt']}>
        <Routes>
          <Route path="/simbolo/:symbol" element={<SymbolDetail />} />
          <Route path="/criar-lista" element={<ListaMock />} />
        </Routes>
      </MemoryRouter>
    );

    const listaButton = screen.getByText(/Voltar para Lista/i);
    fireEvent.click(listaButton);

    expect(screen.getByText(/Você está na Lista/i)).toBeInTheDocument();
  });
});
