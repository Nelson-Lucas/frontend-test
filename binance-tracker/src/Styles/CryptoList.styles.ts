import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #0D1B2A;
  color: #FFFFFF;
  padding: 2rem;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  color: #FFD700;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: #1B263B;
  color: #FFFFFF;
  outline: none;

  &::placeholder {
    color: #CCCCCC;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

export const CreateListButton = styled.button`
  background-color: #FFD700;
  color: #0D1B2A;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e6c200;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    font-size: 0.9rem;
  }
`;

export const Card = styled.div`
    font-family: 'Poppins', sans-serif;
  background-color: #1B263B;
  border-radius: 12px;
  padding: 2rem;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px #00000033;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #FFD70055;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    height: auto;
  }
`;

export const Symbol = styled.h2`
    font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #FFD700;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Price = styled.p`
    font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  color: #FFD700;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  background-color: #FFD700;
  color: #0D1B2A;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #FFC300;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const PageButton = styled.button`
  background-color: #1B263B;
  color: #FFD700;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; 
  cursor: pointer;

  &:hover {
    background-color: #2E3A59;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
`;


export const PageInfo = styled.span`
  font-size: 1rem;
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif; 

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

