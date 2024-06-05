import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Hero() {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh" width="70vw" p="0 20px" textAlign="center">
      <Heading size="4xl" as="h1">
        We Help Legal Innovators Move Money
      </Heading>
      <Text fontSize="2xl" my="15px">
        Confido Legal is an integrated payment processing platform specifically designed for law firms and legal
        technology companies.
      </Text>
      <Button>Schedule a Demo</Button>
    </Flex>
  );
}

export default Hero;
