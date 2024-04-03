import { FormControl, MenuItem, SelectChangeEvent } from "@mui/material";
import { useAtom } from "jotai";
import { numberOfItemsAtom } from "../../../lib/numberOfItemsAtom";
import { tagNameQueryAtom } from "../../../lib/tagNameQueryAtom";
import { debounce } from "lodash";
import TagNameInput from "./Inputs/TagNameInput";
import NumberOfResultsInput from "./Inputs/NumberOfResultsInput";
import { numberOfElementsOnPage } from "../../../Constants/NumberOfElementsOptions";
import { sortSettingsAtom } from "../../../lib/sortingAtom";
import { SortOptions } from "../../../Models/SortingSettings";
import Container from "@mui/material/Container";
import { SortingSelect } from "./Inputs/SortingSelect";

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
      <SortingSelect
        value={sortSettings}
        onChange={(e) => handleSortingSettingsChange(e)}
      />
    </Container>
  );
}

export default InputBar;
