import { Frame } from "./components/Frame";
import { Texture } from "./components/Texture";

import { WrapperContainer } from "./styles";

export const Wrapper = (props: WrapperProps) => {
  const { children } = props;

  return (
    <WrapperContainer>
      {children}
      <Texture />
      <Frame />
    </WrapperContainer>
  );
};

interface WrapperProps {
  children: React.ReactNode;
}
