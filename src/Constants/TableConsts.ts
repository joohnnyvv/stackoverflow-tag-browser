interface ColumnConfig {
  colName: string;
  colSortType?: "name" | "popular";
  align?: "left" | "center" | "right";
  width?: string | number;
}

export const columns: ColumnConfig[] = [
  { colName: "#", align: "left", width: "20%" },
  { colName: "Tag Name", colSortType: "name", align: "left", width: "30%" },
  {
    colName: "Number of usages",
    colSortType: "popular",
    align: "right",
    width: "50%",
  },
];
