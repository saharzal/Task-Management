import React, { useContext } from "react";

export interface Theme {
  background: string;
  primary: {
    light: string;
    main: string;
  };
  dark: {
    100: string;
    200: string;
    300: string;
  };
  light: {
    0: string;
    10: string;
  };
  text: {
    main: string;
  };
}

const theme: Theme = {
  background: "#f3f4f8",
  primary: {
    light: "#5051f9",
    main: "#5051f9",
  },
  dark: {
    100: "#768396",
    200: "#6a7181",
    300: "#5f6388",
  },
  light: {
    0: "#fff",
    10: "#fbfaff",
  },
  text: {
    main: "#232360",
  },
};

const ThemeContext = React.createContext<Theme>(theme);

const ThemeProvider = (props: React.PropsWithChildren) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme, ThemeProvider, ThemeContext };
