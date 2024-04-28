import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const SecondryButton = styled(Button)`
  background-color: #de8cf3;
  color: #181bb8;
`;

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}

`;

export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
  font-size: 40px;
  margin-top: 4rem;
`;
