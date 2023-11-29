import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Header3 from "./Components/Header/Header3";

function App() {
    const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
