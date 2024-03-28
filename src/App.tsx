import React from "react";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAtom } from "jotai";
import { themeAtom } from "./lib/themeAtom";
import { Alert, Paper } from "@mui/material";
import TagsSection from "./Components/TagsSection/TagsSection";
import { isNetworkErrorAtom } from "./lib/isNetworkErrorAtom";
import InfoFooter from "./Components/InfoFooter/InfoFooter";

function App(): React.JSX.Element {
  const [themeMode] = useAtom(themeAtom);
  const [isNetworkError] = useAtom(isNetworkErrorAtom);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={{ minHeight: "100vh", width: "100vw", overflowX: "hidden" }}
      >
        <TopBar />
        {isNetworkError && (
          <Alert
            onClick={refreshPage}
            severity="error"
            sx={{ cursor: "pointer" }}
          >
            Oops! There seems to be a connection problem. Please check your
            internet or try to refresh the page by clicking on this message.
          </Alert>
        )}
        <TagsSection />
        <InfoFooter />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
