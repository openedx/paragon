
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#FCF3F2',
    200: '#F4CCC9',
    300: '#E99994',
    400: '#DD655E',
    500: '#D23228',
    600: '#BD2D24',
    700: '#921108',
    800: '#9E261E',
    900: '#93231C',
  },

  primary: {
    100: '#F0F2F2',
    200: '#BFC9CA',
    300: '#2D494E',
    400: '#0E3639',
    500: '#00262B',
    600: '#002326',
    700: '#002121',
    800: '#001D20',
    900: '#001B1E',
  },
}

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "regular",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "lg",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "solid",
  },
}


const theme = extendTheme({ colors, components: { Button } })

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      {element}
    </ChakraProvider>
  )
}
