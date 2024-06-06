'use client';

import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

export const NavLink = ({ children, nav }: { children: ReactNode; nav: string }) => {
  return (
    <Link href={nav}>
      <Box padding="1rem 1.5rem" borderRadius="md" textDecoration="none">
        {children}
      </Box>
    </Link>
  );
};
