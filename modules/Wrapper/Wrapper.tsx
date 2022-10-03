import { Frame } from "./components/Frame";

import { WrapperContainer } from "./styles";

export const Wrapper = (props: WrapperProps) => {
  const { children } = props;

  return (
    <WrapperContainer>
      {children}
      <Frame />
    </WrapperContainer>
  );
};

interface WrapperProps {
  children: React.ReactNode;
}
