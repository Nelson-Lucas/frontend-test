import styled from 'styled-components';

export const SelectorContainer = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #0077ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
