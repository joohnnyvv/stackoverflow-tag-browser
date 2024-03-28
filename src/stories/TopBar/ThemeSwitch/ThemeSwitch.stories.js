import { ThemeSwitch } from "../../../Components/TopBar/ThemeSwitch/ThemeSwitch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

export default {
  title: "Top Bar/Theme Switch",
  component: ThemeSwitch,
};

const Template = (args) => {
  const lightTheme = createTheme({ palette: { mode: "light" } });

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeSwitch
        {...args}
        checked={args.checked}
        onChange={() => {
          args.checked = !args.checked;
          setCurrentTheme((prev) =>
            prev.palette.mode === "light"
              ? createTheme({ palette: { mode: "dark" } })
              : createTheme({ palette: { mode: "light" } }),
          );
        }}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
