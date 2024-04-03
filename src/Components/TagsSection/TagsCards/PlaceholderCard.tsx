import { Card, CardActions, CardContent, Paper, Skeleton } from "@mui/material";
import Container from "@mui/material/Container";

export default function PlaceholderCard() {
  return (
    <Paper elevation={2}>
      <Card sx={{ height: "200px" }}>
        <CardContent>
          <Skeleton variant="rounded" width="20%" height={14} />
          <Skeleton variant="rounded" width="100%" height={60} sx={{ mt: 2 }} />
          <Container
            disableGutters
            sx={{ display: "flex", alignItems: "center", mt: 1, gap: 1 }}
          >
            <Skeleton variant="rounded" width="50%" height={24} />
          </Container>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton variant="rounded" width="50%" height={24} />
        </CardActions>
      </Card>
    </Paper>
  );
}
