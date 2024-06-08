'use client';

import { Button, Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type Props = {};

function WhereToStart({}: Props) {
  return (
    <Flex
      width="100%"
      direction="column"
      justify="center"
      align="center"
      mb="5rem"
      bg="#0F1F33"
      p="2rem"
      color="whitesmoke">
      <Heading as="h2" m="1rem auto" textAlign="center">
        Not sure where to start?
      </Heading>
      <Text mb="1rem">See what case managment software is right for your firm</Text>
      <Link href="/confido-legal-demo-scheduler" passHref>
        <Button>Discover Options</Button>
      </Link>
    </Flex>
  );
}

export default WhereToStart;
