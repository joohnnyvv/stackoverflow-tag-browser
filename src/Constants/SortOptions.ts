import { SortOptions } from "../Models/SortingSettings";

interface SortOptionsType {
  popularAscending: SortOptions;
  popularDescending: SortOptions;
  nameAscending: SortOptions;
  nameDescending: SortOptions;
}

export const sortOptions: SortOptionsType = {
  popularAscending: ["popular", "asc"],
  popularDescending: ["popular", "desc"],
  nameAscending: ["name", "asc"],
  nameDescending: ["name", "desc"],
};
