import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 2rem;
  background-color: #0D1B2A;
  min-height: 100vh;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PageTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  color: #FFD700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const InputField = styled.input`
  padding: 0.8rem 1rem;
  margin-right: 1rem;
  border-radius: 8px;
  border: none;
  background-color: #1B263B;
  color: #fff;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #CCCCCC;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const AddButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: #FFD700;
  color: #0D1B2A;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e6c200;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SymbolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SymbolCard = styled.div`
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
  color: #fff;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #FFD70055;
  }

  strong {
    font-size: 1.2rem;
    color: #FFD700;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    height: auto;
  }
`;

export const Price = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #4caf50;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Pagination = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const PageButton = styled.button<{ active: boolean }>`
  padding: 0.6rem 1rem;
  background-color: ${({ active }) => (active ? '#FFD700' : '#1B263B')};
  color: ${({ active }) => (active ? '#0D1B2A' : '#FFD700')};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e6c200;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
`;

export const BackButton = styled.button`
  display: block;
  margin: 2rem auto 0 auto; 
  padding: 0.75rem 1.5rem;
  background-color: #FFD700;
  color: #1B263B;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6c200;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

export const DeleteButton = styled.button`
  margin-top: 1.2rem;
  background-color: #1E90FF;
  color: #FFD700;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #187bcd;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
