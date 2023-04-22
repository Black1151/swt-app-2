import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#EBF4FF",
      100: "#C3DAFE",
      200: "#A3BFFA",
      300: "#7F9CF5",
      400: "#667EEA",
      500: "#5A67D8",
      600: "#4C51BF",
      700: "#434190",
      800: "#3C366B",
      900: "#2D2B52",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
  // fonts: {
  //   heading: "Open Sans",
  //   body: "Open Sans",
  //   mono: "Open Sans",
  // },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        _focus: {
          boxShadow: "none",
        },
      },
      defaultProps: {
        colorScheme: "primary",
      },
    },
    Input: {
      baseStyle: {
        borderColor: "gray.400",
      },
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
    Textarea: {
      baseStyle: {
        borderColor: "gray.400",
      },
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
    Select: {
      baseStyle: {
        borderColor: "gray.400",
      },
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "heading",
        fontWeight: "bold",
      },
      sizes: {
        xl: {
          fontSize: "4xl",
        },
        lg: {
          fontSize: "2xl",
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "body",
        fontWeight: "normal",
        color: "gray.700",
      },
      sizes: {
        md: {
          fontSize: "md",
        },
        sm: {
          fontSize: "sm",
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "md",
      },
      defaultProps: {
        colorScheme: "primary",
      },
    },
  },
});

export default theme;
