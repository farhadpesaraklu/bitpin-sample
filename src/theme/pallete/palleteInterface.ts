import { PaletteColorOptions, PaletteOptions } from "@mui/material";

export interface PalleteInterface extends PaletteOptions {
  border?: {
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "300"?: string;
    "400"?: string;
    "500"?: string;
    A100?: string;
    main: string;
    contrastText?: string;
  };
  primary?: PaletteColorOptions & {
    "50": string;
    "100": string;
    "200": string;
    "400": string;
    "600": string;
    "800": string;
    A100?: string;
    main?: string;
    dark?: string;
    light?: string;
  };
  success?: PaletteColorOptions & {
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "400"?: string;
    "600"?: string;
    "800"?: string;
    A100?: string;
    dark?: string;
    main: string;
    light: string;
  };
  error?: PaletteColorOptions & {
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "400"?: string;
    "600"?: string;
    "800"?: string;
    A100?: string;
    dark?: string;
    main: string;
  };
  warning?: PaletteColorOptions & {
    "50"?: string;
    "100"?: string;
    "200"?: string;
    "400"?: string;
    "600"?: string;
    "800"?: string;
    A100?: string;
    dark?: string;
    main: string;
  };
}
