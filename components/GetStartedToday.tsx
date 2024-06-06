'use client';

import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

function GetStartedToday({}: Props) {
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
      <Text mb="1rem">
        Let us help you reduce the cost and improve the client experience associated with accepting payments.
      </Text>
      <Button
        onClick={() => {
          window.location.href = '/confido-legal-demo-scheduler';
        }}>
        Schedule a Demo
      </Button>
    </Flex>
  );
}

export default GetStartedToday;
