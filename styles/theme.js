import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        color: "white",
        background:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(22,21,21,1) 0%, rgba(11,12,25,1) 50%, rgba(0,0,0,1) 100%)",
      },
      a: {
        color: "violet",
      },
    }),
  },
  breakpoints: createBreakpoints({
    sm: "450px",
    md: "1000px",
    lg: "110px",
    xl: "1200px",
  }),
});

export default theme;
