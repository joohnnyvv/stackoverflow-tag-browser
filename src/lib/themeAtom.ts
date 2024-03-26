import {atom} from "jotai";
import {PaletteMode} from "@mui/material";

// @ts-ignore
export const themeAtom = atom<PaletteMode | undefined>("light")