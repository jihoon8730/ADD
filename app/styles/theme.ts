import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    defaultWhite: '#ffffff',
    pink100 : "#FFBAC7",
    pink300 : "#FF5E7F",
    background900: "#000000",
    violet900: "#3B3561",
    green400: "#2FAE8A",
    green50: "#DFF4EE",
  },

  MIXINS: {
  // flex
  flexBox: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
  }
}



export default theme;
