import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CreateList } from '../CreateList';

describe('CreateList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renderiza título da página', () => {
    render(<CreateList />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Lista de símbolos/i)).toBeInTheDocument();
  });

  it('permite digitar no input', () => {
    render(<CreateList />, { wrapper: MemoryRouter });
    const input = screen.getByPlaceholderText(/Ex: btcusdt/i);
    fireEvent.change(input, { target: { value: 'btcusdt' } });
    expect(input).toHaveValue('btcusdt');
  });

  it('adiciona símbolo à lista', () => {
    render(<CreateList />, { wrapper: MemoryRouter });
    const input = screen.getByPlaceholderText(/Ex: btcusdt/i);
    const button = screen.getByText(/Adicionar símbolo/i);

    fireEvent.change(input, { target: { value: 'btcusdt' } });
    fireEvent.click(button);

    expect(screen.getByText(/BTCUSDT/i)).toBeInTheDocument();
  });

  it('exibe erro ao adicionar símbolo duplicado', () => {
    render(<CreateList />, { wrapper: MemoryRouter });
    const input = screen.getByPlaceholderText(/Ex: btcusdt/i);
    const button = screen.getByText(/Adicionar símbolo/i);

    fireEvent.change(input, { target: { value: 'btcusdt' } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: 'btcusdt' } });
    fireEvent.click(button);

    expect(screen.getByText(/já está cadastrada/i)).toBeInTheDocument();
  });
});
