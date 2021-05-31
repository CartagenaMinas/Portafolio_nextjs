
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const theme = extendTheme({ 
    styles: {
      global: (props) => ({
         body: {
          margin:0,
          padding:0,
          minHeight: "100vh",
          color: "white",
          background:"linear-gradient(151deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(255,154,95,1) 100%)"
        },
        a: {
          color:"violet",
        },
      }),
    },
    breakpoints: createBreakpoints({
      sm:"450px",
      md:"1000px",
      lg:"500px",
      xl:"1200px",
    }),
  });
export default theme;