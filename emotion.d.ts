import "@emotion/react";

declare module "@emotion/react" {
  type ChampionTheme = {
    primary: string;
    secondary: string;
    splash: string;
  };

  type Color = {
    backgroundPrimary: string;
    backgroundSecondary: string;
    fontPrimary: string;
    border: string;
    trundle: ChampionTheme;
    glasc: ChampionTheme;
    urgot: ChampionTheme;
  };

  type MediaQuery = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };

  export interface Theme {
    color: Color;
    screens: MediaQuery;
  }
}
