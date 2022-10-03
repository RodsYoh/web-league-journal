import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TextureContainer = styled.div<{ shouldBlink: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  background-image: url("texture.png");
  width: 100%;
  height: 100%;
  pointer-events: none;
  mix-blend-mode: overlay;
  pointer-events: none;

  ${({ shouldBlink }) =>
    shouldBlink &&
    css`
      transform: scale(-1, -1);
      animation: blink 0.5s infinite;

      @keyframes blink {
        0% {
          opacity: 0;
        }
        49% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }
    `}
`;
