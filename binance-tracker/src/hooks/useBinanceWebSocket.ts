import { useEffect } from 'react';

export const useBinanceWebSocket = (symbols: string[], onData: (data: any) => void) => {
  useEffect(() => {
    const streams = symbols.map(s => `${s.toLowerCase()}@ticker`).join('/');
    const ws = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.data) onData(msg.data);
    };

    return () => {
      if (ws && typeof ws.close === 'function') {
        ws.close();
      }
    };
  }, [symbols]);
};
