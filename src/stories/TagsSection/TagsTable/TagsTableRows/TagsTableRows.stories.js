import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

export default {
  title: "Tags Section/Tags Table/Tags Table Rows",
  component: TableRow,
  argTypes: {
    isLoading: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            {args.isLoading ? (
              Array.from(new Array(3)).map((_, index) => (
                <TableCell key={index}>
                  <Skeleton variant="text" />
                </TableCell>
              ))
            ) : (
              <TableCell colSpan={3} align="center">
                {args.text}
              </TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const Empty = Template.bind({});
Empty.args = {
  text: "No tags found",
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
