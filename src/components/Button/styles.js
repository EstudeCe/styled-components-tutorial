import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${(props) => (props.variant === "primary" ? "orange" : "white")};
  color: ${({ variant }) => (variant === "primary" ? "white" : "black")};
  border: solid 2px black;
  padding: 4px 16px;
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
`;
