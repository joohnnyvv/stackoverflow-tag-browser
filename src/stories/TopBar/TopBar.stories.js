import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopBar from "../../Components/TopBar/TopBar";
import Container from "@mui/material/Container";

export default {
  title: "Top Bar/Top Bar",
  component: TopBar,
  argTypes: {
    currentTheme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => {
  const theme = createTheme({
    palette: {
      mode: args.currentTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ width: args.width }}>
        <TopBar />
      </Container>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  currentTheme: "light",
};

export const Mobile = Template.bind({});
Mobile.args = {
  width: "600px",
  currentTheme: "light",
};
