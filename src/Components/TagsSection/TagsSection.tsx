import Container from "@mui/material/Container";
import InputBar from "./InputBar/InputBar";
import TagsTable from "./TagsTable/TagsTable";
import React from "react";
import NavButtons from "./NavButtons/NavButtons";
import { Paper } from "@mui/material";

function TagsSection() {
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
        mb: "40px",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          p: "18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        elevation={4}
      >
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <InputBar />
        </Container>
        <TagsTable />
        <NavButtons />
      </Paper>
    </Container>
  );
}

export default TagsSection;
