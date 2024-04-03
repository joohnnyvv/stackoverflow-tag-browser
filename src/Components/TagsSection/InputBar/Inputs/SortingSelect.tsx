import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { sortOptions } from "../../../../Constants/SortOptions";
import StarIcon from "@mui/icons-material/Star";
import { SortOptions } from "../../../../Models/SortingSettings";

export function SortingSelect(props: {
  value: SortOptions;
  onChange: (e: SelectChangeEvent<string[]>) => void;
}) {
  return (
    <FormControl>
      <InputLabel id="sort-by-select-label">Sort By</InputLabel>
      <Select
        autoWidth={true}
        labelId="sort-by-select-label"
        id="sort-by-select"
        value={props.value}
        label="Sort by"
        onChange={props.onChange}
      >
        <ListSubheader
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <LocalOfferIcon fontSize={"small"} />
          Sort By Name
        </ListSubheader>
        <MenuItem value={sortOptions.nameAscending}>Sort Ascending</MenuItem>
        <MenuItem value={sortOptions.nameDescending}>Sort Descending</MenuItem>
        <ListSubheader
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <StarIcon fontSize={"small"} />
          Sort By Popularity
        </ListSubheader>
        <MenuItem value={sortOptions.popularAscending}>Sort Ascending</MenuItem>
        <MenuItem value={sortOptions.popularDescending}>
          Sort Descending
        </MenuItem>
      </Select>
    </FormControl>
  );
}
