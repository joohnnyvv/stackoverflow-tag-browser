import { Button, Card, CardActions, CardContent, Paper } from "@mui/material";
import { StackTag } from "../../../Models/ApiTypes";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import StarIcon from "@mui/icons-material/Star";

interface TagCardProps {
  tag: StackTag;
}

export default function TagCard(props: TagCardProps) {
  const handleLearnMoreButtonClick = () => {
    window.open(
      `https://stackoverflow.com/questions/tagged/${props.tag.name}`,
      "_blank",
    );
  };
  return (
    <Paper elevation={2}>
      <Card sx={{ height: "200px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.tag.name}
          </Typography>
          <Typography
            variant={"body2"}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
          >
            {props.tag.description ? (
              props.tag.description
            ) : (
              <span>
                No description provided
                <br />
                <br />
                <br />
              </span>
            )}
          </Typography>
          <Container
            disableGutters
            sx={{ display: "flex", alignItems: "center", mt: 2, gap: 1 }}
          >
            <StarIcon fontSize={"small"} />
            <Typography color="text.secondary" variant="body2">
              {props.tag.count}
              {(props.tag?.count ?? 0) > 1 ? " questions" : " question"}
            </Typography>
          </Container>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" onClick={handleLearnMoreButtonClick}>
            Learn more
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
