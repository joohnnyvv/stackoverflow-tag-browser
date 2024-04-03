import { atom } from "jotai/index";
import { SortOptions } from "../Models/SortingSettings";
import { sortOptions } from "../Constants/SortOptions";

export const sortSettingsAtom = atom<SortOptions>(
  sortOptions.popularDescending,
);
