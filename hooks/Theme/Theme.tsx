import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { Global, css } from "@emotion/react";

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const theme = {
  solari: {
    color: {
      backgroundPrimary: "#F7F7FB",
      backgroundSecondary: "#110E1B",
      fontPrimary: "#110E1B",
      fontSecondary: "#F7F7FB",
      border: "#BBBBBB",
      trundlePrimary: "#EE6943",
      trundleSecondary: "#8C4226",
      glascPrimary: "#05B1B0",
      glascSecondary: "#1E7273",
      urgotPrimary: "#B86ECC",
      urgotSecondary: "#552883",
    },
  },
  dark: {
    color: {
      backgroundPrimary: "#F7F7FB",
      backgroundSecondary: "#110E1B",
      fontPrimary: "#F7F7FB",
      fontSecondary: "#F7F7FB",
      border: "#BBBBBB",
      trundlePrimary: "#EE6943",
      trundleSecondary: "#8C4226",
      glascPrimary: "#05B1B0",
      glascSecondary: "#1E7273",
      urgotPrimary: "#B86ECC",
      urgotSecondary: "#552883",
    },
  },
  screens: {
    xs: `only screen and (min-width: ${breakpoints.xs}px)`,
    sm: `only screen and (min-width: ${breakpoints.sm}px)`,
    md: `only screen and (min-width: ${breakpoints.md}px)`,
    lg: `only screen and (min-width: ${breakpoints.lg}px)`,
    xl: `only screen and (min-width: ${breakpoints.xl}px)`,
    xxl: `only screen and (min-width: ${breakpoints.xxl}px)`,
  },
};

/**
 * Project's theme configuration. But for now, only dark theme is available.
 *
 * @remarks
 * Emotion's theming documentation: {@link https://emotion.sh/docs/theming}
 *
 * @example
 * ```
 * <body>
 *   <ThemeProvider>
 *     <App />
 *   </ThemeProvider>
 * </body>
 * ```
 */
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const currentTheme = "solari";

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            height: 100%;
          }
          body {
            background-color: ${theme[currentTheme].color.backgroundPrimary};
            font-family: "Patrick Hand", cursive;
            font-weight: 400;
            strong {
              font-weight: bold;
            }
          }

          a {
            text-decoration: none;
          }

          button {
            border: none;
            background-color: transparent;
            font-family: "Patrick Hand", cursive;
            font-weight: 400;

            &:hover {
              cursor: pointer;
            }
          }
        `}
      />
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </>
  );
};

interface ThemeProviderProps {
  /**
   * The entire App Component
   */
  children: React.ReactNode;
}
