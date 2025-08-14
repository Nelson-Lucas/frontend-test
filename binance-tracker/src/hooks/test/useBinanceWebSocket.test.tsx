import { renderHook } from '@testing-library/react';
import { useBinanceWebSocket } from '../useBinanceWebSocket';

describe('useBinanceWebSocket', () => {
  class MockWebSocket {
    static CONNECTING = 0;
    static OPEN = 1;
    static CLOSING = 2;
    static CLOSED = 3;

    onmessage: ((event: MessageEvent) => void) | null = null;
    close = jest.fn();

    constructor(public url: string) {}

    simulateMessage(data: any) {
      if (this.onmessage) {
        this.onmessage({ data: JSON.stringify(data) } as MessageEvent);
      }
    }
  }

  let wsInstance: MockWebSocket;

  beforeEach(() => {
    global.WebSocket = jest.fn((url: string) => {
      wsInstance = new MockWebSocket(url);
      return wsInstance;
    }) as unknown as typeof WebSocket;
  });

  it('abre conexão e chama onData ao receber mensagem', () => {
    const onData = jest.fn();

    renderHook(() => useBinanceWebSocket(['BTCUSDT'], onData));

    wsInstance.simulateMessage({ data: { price: '123' } });

    expect(onData).toHaveBeenCalledWith({ price: '123' });
    expect(global.WebSocket).toHaveBeenCalledWith(
      'wss://stream.binance.com:9443/stream?streams=btcusdt@ticker'
    );
  });
});
