import { Box, Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
  percentage: number;
  boldText: string;
  regularText: string;
};

const PricingBox = ({ percentage, boldText, regularText }: Props) => {
  return (
    <Box
      border="1px solid #052e5f"
      backgroundColor="#0F1F33"
      borderRadius="30px"
      color="white"
      height="320px"
      width="320px"
      position="relative"
      m="2rem 1rem 1rem 1rem">
      <Heading
        as="h3"
        backgroundColor="gray"
        width="fit-content"
        padding="0.5rem 2rem"
        borderRadius="50px"
        position="absolute"
        top="-2rem"
        left="50%"
        transform="translateX(-50%)">
        {percentage}%
      </Heading>
      <Flex
        justify="center"
        align="center"
        direction="column"
        height="100%"
        width="75%"
        margin="auto"
        textAlign="center">
        <Text fontSize="1.4rem" fontWeight={800}>
          {boldText}
        </Text>
        <Text fontSize="1.2rem">{regularText}</Text>
      </Flex>
    </Box>
  );
};

export default PricingBox;
