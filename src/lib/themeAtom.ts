import { atom } from "jotai";
import { PaletteMode } from "@mui/material";

export const themeAtom = atom<PaletteMode | undefined>("light");
