import { TextField } from "@mui/material";

export default function TagNameInput(props: {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void | undefined;
  label: string;
}) {
  return (
    <TextField
      id="tag-name-input"
      label={props.label}
      variant="outlined"
      onChange={props.onChange}
    ></TextField>
  );
}
