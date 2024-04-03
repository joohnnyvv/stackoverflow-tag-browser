import Container from "@mui/material/Container";
import InputBar from "./InputBar/InputBar";
import TagsCardsContainer from "./TagsCards/TagsCardsContainer";
import React from "react";
import NavButtons from "./NavButtons/NavButtons";

function TagsSection() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        mt: "20px",
        mb: "40px",
      }}
    >
      <InputBar />
      <TagsCardsContainer />
      <NavButtons />
    </Container>
  );
}

export default TagsSection;
