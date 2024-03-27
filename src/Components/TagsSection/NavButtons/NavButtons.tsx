import { IconButton } from "@mui/material";
import Container from "@mui/material/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAtom } from "jotai";
import { hasMoreTagsAtom } from "../../../lib/hasMoreTagsAtom";
import { currentPageAtom } from "../../../lib/currentPageAtom";

function NavButtons() {
  const [hasMoreTags] = useAtom(hasMoreTagsAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const handleNextPageClick = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePreviousPageClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <Container
      maxWidth={"xs"}
      sx={{ display: "flex", justifyContent: "space-evenly", mt: "60px" }}
    >
      <IconButton
        onClick={handlePreviousPageClick}
        disabled={currentPage === 1}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={handleNextPageClick} disabled={!hasMoreTags}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Container>
  );
}

export default NavButtons;
