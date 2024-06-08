'use client';

import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type Props = {
  viewDocs?: boolean;
};

function GetStartedToday({ viewDocs = false }: Props) {
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
        Get Started Today
      </Heading>
      {!viewDocs && (
        <Text mb="1rem">
          Let us help you reduce the cost and improve the client experience associated with accepting payments.
        </Text>
      )}

      {viewDocs ? (
        <Link href="/confido-legal-demo-scheduler" passHref>
          <Button>Discover Options</Button>
        </Link>
      ) : (
        <Link href="/confido-legal-demo-scheduler" passHref>
          <Button>Discover Options</Button>
        </Link>
      )}
    </Flex>
  );
}

export default GetStartedToday;