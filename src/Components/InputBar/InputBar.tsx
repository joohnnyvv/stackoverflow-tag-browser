import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { numberOfElementsOnPage } from "../../Constants/NumberOfElementsOptions";
import { useAtom } from "jotai";
import { numberOfItemsAtom } from "../../lib/numberOfItemsAtom";
import { tagNameQueryAtom } from "../../lib/tagNameQueryAtom";
import { debounce } from "lodash";

function InputBar() {
  const [numberOfItems, setNumberOfItems] = useAtom(numberOfItemsAtom);
  const [tagNameQuery, setTagNameQuery] = useAtom(tagNameQueryAtom);

  const handleNumberOfItemsSelect = (e: SelectChangeEvent<number>) => {
    setNumberOfItems(e.target.value as number);
  };

  const handleQueryChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTagNameQuery(e.target.value as string);
    },
    500,
  );

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Tag name"
        variant="outlined"
        onChange={(e) => handleQueryChange(e)}
      />
      <FormControl sx={{ width: "120px" }}>
        <InputLabel id="demo-simple-select-label">Results</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={numberOfItems}
          label="Results"
          onChange={(e) => handleNumberOfItemsSelect(e)}
        >
          {numberOfElementsOnPage.map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default InputBar;
