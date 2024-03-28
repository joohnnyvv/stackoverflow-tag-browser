import NavButtons from "../../../Components/TagsSection/NavButtons/NavButtons";
import { useAtom } from "jotai/index";
import { themeAtom } from "../../../lib/themeAtom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { IconButton, Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default {
  title: "Tags Section/Nav Buttons",
  component: NavButtons,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    disabled: { control: "boolean" },
    currentTheme: {
      table: {
        disable: true,
      },
    },
    direction: {
      options: ["left", "right"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => {
  const [currentTheme, setCurrentTheme] = useAtom(themeAtom);
  const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  });

  useEffect(() => {
    setCurrentTheme(args.currentTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <IconButton onClick={args.onClick} disabled={args.disabled}>
          {args.direction === "left" ? (
            <ArrowBackIosIcon />
          ) : (
            <ArrowForwardIosIcon />
          )}
        </IconButton>
      </Paper>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
export const DarkMode = Template.bind({});
DarkMode.args = {
  currentTheme: "dark",
};
