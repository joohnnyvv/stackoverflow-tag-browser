import { InputLabel, Select, SelectChangeEvent } from "@mui/material";

export default function NumberOfResultsInput(props: {
  value: number;
  onChange: (e: SelectChangeEvent<number>) => void;
  mapFunction: (number: number) => JSX.Element;
  label: string;
  numberOfElementsOnPage: number[];
}) {
  return (
    <>
      <InputLabel id="results-label">{props.label}</InputLabel>
      <Select
        labelId="results-label"
        id="results-input"
        value={props.value}
        label="Results"
        onChange={props.onChange}
      >
        {props.numberOfElementsOnPage.map(props.mapFunction)}
      </Select>
    </>
  );
}
