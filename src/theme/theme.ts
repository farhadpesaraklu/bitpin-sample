import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
import { pallete } from "./pallete/pallete";
import { typography } from "./typography/typography";

const theme = createTheme(
  {
    direction: "rtl",
    palette: pallete,
    typography: typography,
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            color: "black",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#FFFFFF",
          },
        },
      },

      MuiInput: {
        styleOverrides: {
          root: {},
        },
      },

      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            background: "transparent !important",
            "&.MuiInputLabel-shrink.Mui-focused": {
              color: "#007BFF !important",
              "&.Mui-error": {
                color: "#DF2040 !important",
              },
            },
            // color: "khaki !important",
            "&.MuiFormLabel-filled.Mui-error": {
              color: "#DF2040 !important",
            },
            "&.MuiFormLabel-filled.Mui-focused": {
              color: "#007BFF !important",
              "&.Mui-error": {
                color: "#DF2040 !important",
              },
            },
            "&.Mui-disabled": {
              color: "#CCCCCC !important",
            },
          },

          colorSecondary: {
            color: "#fff !important",
            borderRadius: 8,
            "&.Mui-focused": {
              color: "white",
            },
            "&.Mui-error": {
              color: "#DF2040 !important",
            },
          },
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            color: "#292D32 !important",
            fontSize: "14px",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            height: "56px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#B6B6B6 !important",
            },
            "&.Mui-error": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#DF2040 !important",
              },
              "&.Mui-focused": {
                color: "#808080",
                background: "transparent",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#DF2040 !important",
                },
              },
            },
            "&.Mui-focused": {
              background: "transparent",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#007BFF !important",
              },
            },
            "&.Mui-disabled": {
              color: "red !important",
              "&.Mui-focused": {
                color: "red !important",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D2D6DC !important",
              },
            },
          },

          colorSecondary: {
            color: "#fff !important",
            borderRadius: 8,
            height: "56px",

            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#B6B6B6 !important",
            },
            ":hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },

            "&.Mui-error": {
              ":hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#DF2040",
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            height: "56px",
            borderRadius: "8px",
          },
        },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "rgba(121, 175, 255, 0.2)",
              borderRadius: "8px",
            },
          },
        },
      },
      MuiStepLabel: {
        styleOverrides: {
          label: {
            color: "#808080",
            "&.Mui-completed": {
              color: "#007BFF",
            },
            "&.Mui-active": {
              color: "#808080",
            },
          },
        },
      },
    },
  },
  faIR
);

export default theme;
