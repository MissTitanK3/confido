import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type Props = {
  icon: React.ReactNode;
  title: string;
  mb?: string;
};

function IconHeading({ children, icon, title, mb }: PropsWithChildren<Props>) {
  return (
    <Box margin={`30px 0 15px ${mb}`}>
      <Flex
        align="center"
        // justify="center"
        direction="row"
        my="5"
        sx={{
          gap: '0.5rem',
        }}>
        {icon}
        <Heading
          as="h3"
          size={{
            base: 'md',
            md: 'lg',
          }}>
          {title}
        </Heading>
      </Flex>
      {children}
    </Box>
  );
}

export default IconHeading;
