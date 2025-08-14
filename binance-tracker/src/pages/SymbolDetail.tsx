import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  Grid,
  Item,
  ButtonGroup,
  BackButton
} from '../Styles/SymbolDetail.styles';

interface TickerData {
  e: string;
  E: number;
  s: string;
  p: string;
  P: string;
  w: string;
  x: string;
  c: string;
  Q: string;
  b: string;
  B: string;
  a: string;
  A: string;
  o: string;
  h: string;
  l: string;
  v: string;
  q: string;
  O: number;
  C: number;
  F: number;
  L: number;
  n: number;
}

export const SymbolDetail: React.FC = () => {
  const { symbol } = useParams();
  const [data, setData] = useState<TickerData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!symbol) return;

    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`);
    ws.onmessage = (event) => {
      const ticker = JSON.parse(event.data);
      setData(ticker);
    };

    return () => ws.close();
  }, [symbol]);

  return (
    <Container>
      <Title>📊 Detalhes de {symbol?.toUpperCase()}</Title>

      {data ? (
        <Grid>
          <Item><strong>🕒 Evento:</strong> {data.e}</Item>
          <Item><strong>⏱️ Timestamp:</strong> {data.E}</Item>
          <Item><strong>📛 Símbolo:</strong> {data.s}</Item>
          <Item><strong>📈 Variação:</strong> {data.p}</Item>
          <Item><strong>📊 % Variação:</strong> {data.P}%</Item>
          <Item><strong>📉 Média ponderada:</strong> {data.w}</Item>
          <Item><strong>🎯 Primeiro preço:</strong> {data.x}</Item>
          <Item><strong>💰 Último preço:</strong> {data.c}</Item>
          <Item><strong>📦 Última quantidade:</strong> {data.Q}</Item>
          <Item><strong>🟢 Melhor bid:</strong> {data.b} ({data.B})</Item>
          <Item><strong>🔴 Melhor ask:</strong> {data.a} ({data.A})</Item>
          <Item><strong>📤 Preço de abertura:</strong> {data.o}</Item>
          <Item><strong>📈 Máxima:</strong> {data.h}</Item>
          <Item><strong>📉 Mínima:</strong> {data.l}</Item>
          <Item><strong>🔁 Volume base:</strong> {data.v}</Item>
          <Item><strong>💵 Volume cotado:</strong> {data.q}</Item>
          <Item><strong>🕰️ Início estatística:</strong> {data.O}</Item>
          <Item><strong>🕰️ Fim estatística:</strong> {data.C}</Item>
          <Item><strong>🆔 Primeiro trade:</strong> {data.F}</Item>
          <Item><strong>🆔 Último trade:</strong> {data.L}</Item>
          <Item><strong>🔢 Nº de trades:</strong> {data.n}</Item>
        </Grid>
      ) : (
        <p>Carregando dados em tempo real...</p>
      )}

      <ButtonGroup>
        <BackButton onClick={() => navigate('/')}>← Voltar para Home</BackButton>
        <BackButton onClick={() => navigate('/criar-lista')}>← Voltar para Lista</BackButton>
      </ButtonGroup>
    </Container>
  );
};
