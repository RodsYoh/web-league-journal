import { WrapperContainer } from "./styles";

export const Wrapper = (props: WrapperProps) => {
  const { children } = props;

  return <WrapperContainer>{children}</WrapperContainer>;
};

interface WrapperProps {
  children: React.ReactNode;
}
