import {
  CircularProgress,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { columns } from "../../../Constants/TableConsts";
import Box from "@mui/material/Box";
import { numberOfItemsAtom } from "../../../lib/numberOfItemsAtom";
import { useAtom } from "jotai";
import { tagNameQueryAtom } from "../../../lib/tagNameQueryAtom";
import { useEffect, useState } from "react";
import axios from "axios";
import { StackTagsResponse } from "../../../Models/ApiTypes";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function TagsTable() {
  const [numberOfItems] = useAtom(numberOfItemsAtom);
  const [tagNameQuery] = useAtom(tagNameQueryAtom);

  const [tags, setTags] = useState<StackTagsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState<"name" | "popular">("popular");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(0);

  const fetchTags = async () => {
    try {
      setIsLoading(true);
      const encodedTagNameQuery = encodeURIComponent(tagNameQuery);
      const response = await axios.get(
        `https://api.stackexchange.com/2.3/tags?page=${currentPage + 1}&pagesize=${numberOfItems}&order=${sortDirection}&sort=${sortType}&inname=${encodedTagNameQuery}&filter=default&site=stackoverflow&key=p1dDesP)8Xbrh0a4Qq0mVA((`,
      );
      setTags(response.data as StackTagsResponse);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchTags();
    };
    fetchData();
  }, [tagNameQuery, numberOfItems, sortType, sortDirection, currentPage]);

  const handleSortTypeChange = (sort: "name" | "popular") => {
    setSortType(sort);
  };

  const handleSortDirectionChange = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "asc" ? "desc" : "asc",
    );
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setCurrentPage(newPage);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "30px",
        overflow: "hidden",
      }}
    >
      <TableContainer
        sx={{ maxWidth: "600px", maxHeight: "440px", minHeight: "360px" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{
                    ...(column.colSortType ? { cursor: "pointer" } : {}),
                    width: column.width,
                  }}
                  align={column.align}
                  onClick={() => {
                    if (column.colSortType) {
                      if (column.colSortType === sortType) {
                        handleSortDirectionChange();
                      }
                      handleSortTypeChange(column.colSortType);
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: column.align,
                    }}
                  >
                    {column.colName}
                    <TableSortLabel direction={sortDirection} />
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? Array.from(new Array(numberOfItems)).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton variant="text" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" />
                    </TableCell>
                    <TableCell>
                      <Skeleton variant="text" />
                    </TableCell>
                  </TableRow>
                ))
              : tags?.items.map((tag, index) => (
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
