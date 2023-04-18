import { ButtonStyled } from "./styles";

export function Button(props) {
  const { children, variant } = props;

  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
}
