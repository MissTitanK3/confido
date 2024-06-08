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
        <Link
          href="https://docs.confidolegal.com/?hsCtaTracking=ae49054b-5e4c-47e4-831c-1392eb28ad05%7C28c5cb38-3bd3-499a-a1ca-cbd55cd20715"
          target="_blank"
          passHref>
          <Button>View Documentation</Button>
        </Link>
      ) : (
        <Link href="/confido-legal-demo-scheduler" passHref>
          <Button>Schedule A Demo</Button>
        </Link>
      )}
    </Flex>
  );
}

export default GetStartedToday;
