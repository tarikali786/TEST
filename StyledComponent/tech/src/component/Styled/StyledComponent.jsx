import styled from "styled-components";

export const TechHeading = styled.h1`
  font-size: 30px;
  color: #000;
`;
export const TechButton = styled.button`
  border-radius: 6px;
  background: ${(props) => (props.primary ? " #1890ff" : "#fff")};
  color: ${(props) => (props.primary ? " #fff" : "#2b2b2b")};
  border: ${(props) => (props.primary ? "none" : "1px solid #d9d9d9")};

  padding: 0.6rem 1rem;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.primary && "#429ef3"};
    border: ${(props) => !props.primary && "1px solid #1890ff"};
    color: ${(props) => !props.primary && "#1890ff"};
  }
  &:active {
    scale: 0.96;
  }
`;
