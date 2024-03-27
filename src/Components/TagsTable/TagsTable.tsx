import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { columnNames } from "../../Constants/TableConsts";
import Box from "@mui/material/Box";
import { numberOfItemsAtom } from "../../lib/numberOfItemsAtom";
import { useAtom } from "jotai";
import { tagNameQueryAtom } from "../../lib/tagNameQueryAtom";
import { useEffect, useState } from "react";
import axios from "axios";
import { StackTagsResponse } from "../../Models/ApiTypes";

function TagsTable() {
  const [numberOfItems] = useAtom(numberOfItemsAtom);
  const [tagNameQuery] = useAtom(tagNameQueryAtom);
  const [tags, setTags] = useState<StackTagsResponse>();

  const fetchTags = async () => {
    try {
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/tags?page=1&pagesize=${numberOfItems}&order=desc&sort=popular&inname=${tagNameQuery}&filter=default&site=stackoverflow&key=p1dDesP)8Xbrh0a4Qq0mVA((`,
      );
      setTags(response.data as StackTagsResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTags();
    };

    fetchData();
  }, [tagNameQuery, numberOfItems]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "40px",
        overflow: "hidden",
      }}
    >
      <TableContainer sx={{ maxWidth: "600px", maxHeight: "440px" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columnNames.map((columnName, index) => (
                <TableCell
                  sx={index < 2 ? { width: "25%" } : { width: "50%" }}
                  align={index < 2 ? "left" : "right"}
                >
                  {columnName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tags?.items.map((tag, index) => (
              <TableRow key={tag.name}>
                <TableCell align={"left"}>{index + 1}</TableCell>
                <TableCell align={"left"}>{tag.name}</TableCell>
                <TableCell align={"right"}>{tag.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TagsTable;
