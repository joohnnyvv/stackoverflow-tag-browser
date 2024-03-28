import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function InfoFooter() {
  return (
    <Container maxWidth={"xs"}>
      <Typography align={"center"} gutterBottom={true} variant={"subtitle2"}>
        Application created as part of a recruitment task by Jan Rembikowski
      </Typography>
    </Container>
  );
}

export default InfoFooter;
