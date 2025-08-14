import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 2rem;
  background-color: #0D1B2A;
  min-height: 100vh;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #FFD700;
  text-align: center;
`;

export const CreateListButton = styled.button`
  background-color: #FFD700;
  color: #0D1B2A;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background-color: #FFC300;
  }
`;

export const CryptoGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;
