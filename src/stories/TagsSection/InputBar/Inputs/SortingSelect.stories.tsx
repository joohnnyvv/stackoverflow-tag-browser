import { SortingSelect } from "../../../../Components/TagsSection/InputBar/Inputs/SortingSelect";
import React, { useState } from "react";
import { SortOptions } from "../../../../Models/SortingSettings";
import { sortOptions } from "../../../../Constants/SortOptions";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode, Paper } from "@mui/material";

export default {
  title: "Tags Section/Input Bar/Sorting Select",
  component: SortingSelect,
  argTypes: {
    currentTheme: {
      options: ["light", "dark"],
      control: { type: "select" },
    },
  },
};

const Template = (args: { currentTheme: PaletteMode | undefined }) => {
  const [sorting, setSorting] = useState<SortOptions>(
    sortOptions.popularDescending,
  );
  const theme = createTheme({
    palette: {
      mode: args.currentTheme,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} sx={{ display: "flex", p: "10px" }}>
        <SortingSelect
          value={sorting}
          onChange={(e) => setSorting(e.target.value as SortOptions)}
        />
      </Paper>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  currentTheme: "light",
};
