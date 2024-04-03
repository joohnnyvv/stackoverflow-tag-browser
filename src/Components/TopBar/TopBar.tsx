import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MoreIcon from "@mui/icons-material/More";
import { FormControl } from "@mui/material";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";
import { useAtom } from "jotai/index";
import { themeAtom } from "../../lib/themeAtom";

function TopBar() {
  const [themeMode, setThemeMode] = useAtom(themeAtom);

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <MoreIcon sx={{ display: "flex", mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TAG BROWSER
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControl>
              <ThemeSwitch onChange={() => toggleTheme()} />
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
