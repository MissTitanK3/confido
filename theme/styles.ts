import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bgGradient:
          props.colorMode === 'dark'
            ? 'linear-gradient(45deg, #333333, #222222, #111111)'
            : 'linear-gradient(45deg, #e6e6e6, #cccccc, #b3b3b3)',
      },
    }),
  },
  colors: {
    // Add your custom colors here
    dark: {
      background: 'linear-gradient(45deg, #333333, #222222, #111111)',
      color: '#ffffff',
    },
    light: {
      background: 'linear-gradient(45deg, #e6e6e6, #cccccc, #b3b3b3)',
      color: '#000000',
    },
  },
  fonts: {
    // Add your custom fonts here
  },
  components: {
    // Add your custom component styles here
  },
});

export default theme;
