import { extendTheme } from '@chakra-ui/react';

const buttons = extendTheme({
  components: {
    Button: {
      baseStyle: {
        colorScheme: 'blue',
      },
    },
  },
});

export default buttons;
