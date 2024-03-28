import InputBar from "../../../Components/TagsSection/InputBar/InputBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

export default {
  title: "Tags Section/Input Bar",
  component: InputBar,
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
      <Paper
        elevation={0}
        sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
      >
        <InputBar />
      </Paper>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
Default.args = {
  currentTheme: "light",
};
