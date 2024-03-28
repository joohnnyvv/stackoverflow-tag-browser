import TagNameInput from "../../../../Components/TagsSection/InputBar/Inputs/TagNameInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

export default {
  title: "Tags Section/Input Bar/Tag Name Input",
  component: TagNameInput,
  argTypes: {
    currentTheme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    onChange: {
      table: {
        disable: true,
      },
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
      <Paper elevation={0} sx={{ display: "flex", p: "10px" }}>
        <TagNameInput onChange={args.onChange} label={args.label} />
      </Paper>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  currentTheme: "light",
  label: "Tag Name",
};
export const OverflowingLabel = Template.bind({});
OverflowingLabel.args = {
  currentTheme: "light",
  label: "Tag Name Tag Name Tag Name",
};
