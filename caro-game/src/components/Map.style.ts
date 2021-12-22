import styled from "styled-components";

export const Board = styled.div`
  margin: auto;
  width: 800px;
  height: 100vh;
  background-color: darkcyan;
  color: #fff;
`;

export const Row = styled.div`
  margin: auto;
  display: flex;
  gap: 2px;
  margin-bottom: 2px;
`;

export const Cell = styled.button`
  background-color: #fff;
  flex: 1;
  border: none;
  width: 30px;
  height: 30px;
`;

export const Reset = styled.button`
  background-color: darkcyan;
  font-weight: 600;
  font-size: 2rem;
  border: 3px solid #fff;
  color: #fff;
  border-radius: 1rem;
  margin-bottom: 10px;
`;
