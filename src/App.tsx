import "./App.css";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./pages/AppRoutes";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <RouterProvider router={AppRouter} />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
