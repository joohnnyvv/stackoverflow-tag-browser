import { Alert } from "@mui/material";
import React from "react";

export default function ConnectionFailAlert(props: {
  onClick: () => void;
  text: string;
  severity: "error" | "success" | "info" | "warning" | undefined;
}) {
  return (
    <Alert
      onClick={props.onClick}
      severity={props.severity}
      sx={{ cursor: "pointer" }}
    >
      {props.text}
    </Alert>
  );
}
