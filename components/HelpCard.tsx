import { Box, BoxProps, Flex, FlexProps, Heading, HeadingProps, Text, TextProps, useColorMode } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardProps = {
  icon: StaticImageData;
  iconAlt: string;
  headingText: string;
  text: string;
  cardProps?: BoxProps;
  headerProps?: FlexProps;
  headingProps?: HeadingProps;
  textProps?: TextProps;
};

export default function CustomCard({
  icon,
  iconAlt,
  headingText,
  text,
  cardProps,
  headerProps,
  headingProps,
  textProps,
}: CardProps) {
  const { colorMode } = useColorMode();

  return (
    <Box
      {...cardProps}
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      borderRadius={10}
      p="20px"
      m="60px 10px 0 10px"
      w="250px"
      h="400px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      position="relative">
      {icon && iconAlt && (
        <Box position="absolute" top="-50px">
          <Image
            src={icon}
            alt={iconAlt}
            height={100}
            width={100}
            priority
            style={{
              padding: '5px',
            }}
          />
        </Box>
      )}
      <Flex {...headerProps} direction="column" align="center" justify="center">
        <Heading {...headingProps} as="h4" textAlign="center" mt="75px">
          {headingText}
        </Heading>
      </Flex>
      <Text {...textProps} textAlign="center">
        {text}
      </Text>
    </Box>
  );
}
