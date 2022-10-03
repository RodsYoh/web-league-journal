import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  position: relative;
  min-height: 100%;
  min-width: 100%;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  color: ${({ theme }) => theme.color.fontPrimary};
  padding: 0.5rem;
`;
