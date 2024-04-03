import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAtom } from "jotai";
import { numberOfItemsAtom } from "../../../lib/numberOfItemsAtom";
import { tagNameQueryAtom } from "../../../lib/tagNameQueryAtom";
import { debounce } from "lodash";
import TagNameInput from "./Inputs/TagNameInput";
import NumberOfResultsInput from "./Inputs/NumberOfResultsInput";
import { numberOfElementsOnPage } from "../../../Constants/NumberOfElementsOptions";
import { sortSettingsAtom } from "../../../lib/sortingAtom";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { SortOptions } from "../../../Models/SortingSettings";
import { sortOptions } from "../../../Constants/SortOptions";
import Container from "@mui/material/Container";

function InputBar() {
  const [numberOfItems, setNumberOfItems] = useAtom(numberOfItemsAtom);
  const [, setTagNameQuery] = useAtom(tagNameQueryAtom);
  const [sortSettings, setSortSettings] = useAtom(sortSettingsAtom);

  const handleSortingSettingsChange = (event: SelectChangeEvent<string[]>) => {
    setSortSettings(event.target.value as SortOptions);
  };

  const handleNumberOfItemsSelect = (e: SelectChangeEvent<number>) => {
    setNumberOfItems(e.target.value as number);
  };

  const handleQueryChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTagNameQuery(e.target.value.toLowerCase().replace(/ /g, ""));
    },
    500,
  );

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Container sx={{ display: "flex", gap: 1 }}>
        <TagNameInput label="Tag Name" onChange={(e) => handleQueryChange(e)} />
        <FormControl sx={{ width: "120px" }}>
          <NumberOfResultsInput
            value={numberOfItems}
            onChange={(e) => handleNumberOfItemsSelect(e)}
            mapFunction={(number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            )}
            label="Results"
            numberOfElementsOnPage={numberOfElementsOnPage}
          />{" "}
        </FormControl>
      </Container>
      <FormControl>
        <InputLabel id="sort-by-select-label">Sort By</InputLabel>
        <Select
          autoWidth={true}
          labelId="sort-by-select-label"
          id="sort-by-select"
          value={sortSettings}
          label="Sort by"
          onChange={(e) => handleSortingSettingsChange(e)}
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
          <MenuItem value={sortOptions.nameDescending}>
            Sort Descending
          </MenuItem>
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
          <MenuItem value={sortOptions.popularAscending}>
            Sort Ascending
          </MenuItem>
          <MenuItem value={sortOptions.popularDescending}>
            Sort Descending
          </MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}

export default InputBar;
