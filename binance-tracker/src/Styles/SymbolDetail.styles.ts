import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background-color: #0D1B2A;
  color: #fff;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #FFD700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  background-color: #1B263B;
  padding: 2rem;
  border-radius: 12px;
  font-size: 1rem;
  line-height: 1.6;
  box-shadow: 0 0 10px #00000033;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px #FFD70055;
  }

  strong {
    color: #FFD700;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const BackButton = styled.button`
  background-color: #1B263B;
  color: #FFD700;
  border: 2px solid #FFD700;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #FFD700;
    color: #1B263B;
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;
