import Container from "@mui/material/Container";
import InputBar from "./InputBar/InputBar";
import TagsTable from "./TagsTable/TagsTable";
import React from "react";
import NavButtons from "./NavButtons/NavButtons";

function TagsSection() {
  return (
    <>
      <Container
        maxWidth={"sm"}
        sx={{ display: "flex", justifyContent: "space-between", mt: "60px" }}
      >
        <InputBar />
      </Container>
      <TagsTable />
      <NavButtons />
    </>
  );
}

export default TagsSection;
