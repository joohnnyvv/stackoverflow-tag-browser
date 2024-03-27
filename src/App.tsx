import React from "react";
import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAtom } from "jotai";
import { themeAtom } from "./lib/themeAtom";
import InputBar from "./Components/InputBar/InputBar";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import TagsTable from "./Components/TagsTable/TagsTable";

function App(): React.JSX.Element {
  const [themeMode] = useAtom(themeAtom);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        <TopBar />
        <Container
          maxWidth={"md"}
          sx={{ display: "flex", justifyContent: "space-between", mt: "30px" }}
        >
          <InputBar />
        </Container>
        <TagsTable />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
