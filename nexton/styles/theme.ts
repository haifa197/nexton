import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      200: '#4B5563',
      // Add more shades of primary color if needed
    },
    // Define other custom colors as needed
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
    // Add more custom fonts as needed
  },
  // Other theme customizations like typography, breakpoints, etc.
});

export default theme;
