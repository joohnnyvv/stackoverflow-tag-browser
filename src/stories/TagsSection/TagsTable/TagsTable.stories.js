import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TagsCardsContainer from "../../../Components/TagsSection/TagsCards/TagsCardsContainer";
import { useAtom } from "jotai";
import { themeAtom } from "../../../lib/themeAtom";
import { Paper } from "@mui/material";

export default {
  title: "Tags Section/Tags Table",
  component: TagsCardsContainer,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const [theme, setTheme] = useAtom(themeAtom);
  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  useEffect(() => {
    setTheme(args.theme);
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <Paper elevation={0}>
        <TagsCardsContainer isLoading={args.isLoading} />
      </Paper>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: "light",
};
export const Dark = Template.bind({});
Dark.args = {
  theme: "dark",
};
