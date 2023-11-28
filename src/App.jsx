import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header1 from "./Components/Header/Header1";

function App() {
    const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider 
// @ts-ignore
      value={colorMode}>
        <ThemeProvider 
// @ts-ignore
        theme={theme}>
          <CssBaseline />
          <Header1 />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
