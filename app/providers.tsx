'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '@/theme/styles';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}
