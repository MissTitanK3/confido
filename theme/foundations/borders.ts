import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        colorScheme: 'blue',
      },
    },
  },
});

export default theme;
