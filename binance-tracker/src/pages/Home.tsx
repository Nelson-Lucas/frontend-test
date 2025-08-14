import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoList } from '../components/CryptoList';
import {
  HomeContainer,
  HomeTitle,
  CreateListButton,
  CryptoGrid,
} from '../Styles/Home.styles';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeTitle>💹 Monitor de Criptomoedas</HomeTitle>

      <CreateListButton onClick={() => navigate('/criar-lista')}>
        ➕ Criar nova lista
      </CreateListButton>

      <CryptoGrid>
        <CryptoList />
      </CryptoGrid>
    </HomeContainer>
  );
};
