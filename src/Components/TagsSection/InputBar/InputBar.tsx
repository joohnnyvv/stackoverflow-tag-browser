import { FormControl, MenuItem, SelectChangeEvent } from "@mui/material";
import { useAtom } from "jotai";
import { numberOfItemsAtom } from "../../../lib/numberOfItemsAtom";
import { tagNameQueryAtom } from "../../../lib/tagNameQueryAtom";
import { debounce } from "lodash";
import TagNameInput from "./Inputs/TagNameInput";
import NumberOfResultsInput from "./Inputs/NumberOfResultsInput";
import { numberOfElementsOnPage } from "../../../Constants/NumberOfElementsOptions";

function InputBar() {
  const [numberOfItems, setNumberOfItems] = useAtom(numberOfItemsAtom);
  const [, setTagNameQuery] = useAtom(tagNameQueryAtom);

  const handleNumberOfItemsSelect = (e: SelectChangeEvent<number>) => {
    setNumberOfItems(e.target.value as number);
  };

  const handleQueryChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTagNameQuery(e.target.value.toLowerCase());
    },
    500,
  );

  return (
    <>
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
        />
      </FormControl>
    </>
  );
}

export default InputBar;
