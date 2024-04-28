import styled from "styled-components";
import "./App.css";
import { Button, Rotate, SecondryButton } from "./component/common/Styled";
import { useState } from "react";
const Title = styled.h1`
  color: ${(props) => (props.primary ? "red" : "black")};
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.h1`
  color: green;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  justify-content: center;
  padding: 0 100px;
  line-height: 0;
`;

export const  StyleComponent=() =>{
  const [count, setCount] = useState(0);
  return (
    <>
      <Wrapper>
        <Title primary>Styled Component</Title>
        <Title>Styled Component</Title>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Button onClick={() => setCount(count + 1)}> Click me {count} </Button>
        <SecondryButton>Second Button</SecondryButton>
        <Rotate>✌️</Rotate>
      </Wrapper>
    </>
  );
}

