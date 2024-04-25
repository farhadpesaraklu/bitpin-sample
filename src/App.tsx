import "./App.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CssBaseline } from "@mui/material";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <CssBaseline />
        <ThemeProvider theme={theme}></ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
