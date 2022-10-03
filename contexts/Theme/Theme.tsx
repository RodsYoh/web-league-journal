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
      trundle: {
        primary: "#EE6943",
        secondary: "#8C4226",
        splash:
          "https://assets.5pots.com/file/cincopots/splash/FightNight_Trundle_Splash.jpeg",
      },
      glasc: {
        primary: "#05B1B0",
        secondary: "#1E7273",
        splash:
          "https://assets.5pots.com/file/cincopots/splash/FrightNight_Renata_and_Nautilus_Splash.jpeg",
      },
      urgot: {
        primary: "#B86ECC",
        secondary: "#552883",
        splash:
          "https://assets.5pots.com/file/cincopots/splash/FrightNightUrgot_Splash.jpeg",
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
  },
  lunari: {
    color: {
      backgroundPrimary: "#110E1B",
      backgroundSecondary: "#110E1B",
      fontPrimary: "#F7F7FB",
      fontSecondary: "#F7F7FB",
      border: "#BBBBBB",
      trundle: {
        primary: "#EE6943",
        secondary: "#8C4226",
        splash:
          "https://assets.5pots.com/file/cincopots/splash/FightNight_Trundle_Splash.jpeg",
      },
      glasc: {
        primary: "#05B1B0",
        secondary: "#1E7273",
        splash:
          "https://assets.5pots.com/file/cincopots/splash/FrightNight_Renata_and_Nautilus_Splash.jpeg",
      },
      urgot: {
        primary: "#B86ECC",
        secondary: "#552883",
        splash:
          "https://assets.5pots.com/file/cincopots/splash/FrightNightUrgot_Splash.jpeg",
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
  const championColor = "trundle";

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

          #__next,
          #__next > div {
            height: 100%;
            width: 100%;
          }
        `}
      />
      <EmotionProvider theme={theme[currentTheme]}>{children}</EmotionProvider>
    </>
  );
};

interface ThemeProviderProps {
  /**
   * The entire App Component
   */
  children: React.ReactNode;
}
