import { useTheme } from "@emotion/react";

import { FrameContainer } from "./styles";

export const Frame = () => {
  const theme = useTheme();

  return (
    <FrameContainer
      viewBox="0 0 1512 982"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      data-testid="frame"
    >
      <path
        d="M4.60976 0.0732612C474.599 -0.611208 951.033 3.78687 1504.39 1.41307M3.51628 1.8791C332.477 7.55874 661.554 6.24805 1503.19 0.728605M1505.15 0.786857C1512.84 361.852 1511.12 722.538 1501.84 975.777M1504.24 1.95191C1499.77 233.128 1499.65 464.639 1503.91 976.506M1502.45 977.787C974.025 983.758 443.136 982.404 2.90394 976.84M1504.3 975.166C1026.77 984.603 550.705 983.773 4.71181 975.705M3.44338 976.054C11.5351 628.955 11.6663 283.779 2 3.17522M4.47854 975.501C4.14321 709.053 4.17237 441.877 3.88077 1.76259"
        stroke={theme.color.fontPrimary}
        stroke-width="3"
        stroke-linecap="round"
      />
    </FrameContainer>
  );
};
