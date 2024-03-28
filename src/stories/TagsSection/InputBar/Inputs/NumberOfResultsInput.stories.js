import NumberOfResultsInput from "../../../../Components/TagsSection/InputBar/Inputs/NumberOfResultsInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, MenuItem } from "@mui/material";
import { numberOfElementsOnPage } from "../../../../Constants/NumberOfElementsOptions";

export default {
  title: "Tags Section/Input Bar/Number Of Results Input",
  component: NumberOfResultsInput,
  argTypes: {
    currentTheme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
    value: { control: { type: "number", min: 12, max: 48, step: 12 } },
    onChange: {
      table: {
        disable: true,
      },
    },
    mapFunction: {
      table: {
        disable: true,
      },
    },
    numberOfElementsOnPage: {
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
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <NumberOfResultsInput
          value={args.value}
          onChange={(e) => {
            handleChange(e);
          }}
          mapFunction={(number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          )}
          numberOfElementsOnPage={numberOfElementsOnPage}
          label={args.label}
        />
      </FormControl>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
Default.args = {
  currentTheme: "light",
  label: "Results",
  value: 12,
};
