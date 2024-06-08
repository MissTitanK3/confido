import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      width="70vw"
      p="0 20px"
      mt={{
        base: '50px',
        md: '0',
      }}
      textAlign="center">
      <Heading size="4xl" as="h1">
        We Help Legal Innovators Move Money
      </Heading>
      <Text fontSize="2xl" my="15px">
        Confido Legal is an integrated payment processing platform specifically designed for law firms and legal
        technology companies.
      </Text>
      <Link href="/confido-legal-demo-scheduler" passHref>
        <Button>Schedule a Demo</Button>
      </Link>
    </Flex>
  );
}

export default Hero;
