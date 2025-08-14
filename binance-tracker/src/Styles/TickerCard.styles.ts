import styled from 'styled-components';

export const Card = styled.div`
  background: #1e1e2f;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  min-width: 200px;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    transform: scale(1.02);
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.95rem;
  }
`;
