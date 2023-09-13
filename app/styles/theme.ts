import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    defaultWhite: '#ffffff',
    pink100 : "#FFBAC7",
    background900: "#000000",
  },

  MIXINS: {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  }
}



export default theme;
