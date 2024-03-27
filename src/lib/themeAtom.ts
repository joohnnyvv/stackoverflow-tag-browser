import { atom } from "jotai";
import axios from "axios";
import { PaletteMode } from "@mui/material";

export const themeAtom = atom<PaletteMode | undefined>("light");
