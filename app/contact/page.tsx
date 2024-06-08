import GetStartedToday from '@/components/common/GetStartedToday';
import WhatClientsSay from '@/components/common/WhatClientsSay';
import Footer from '@/components/Footer';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

function Contact({}: Props) {
  return (
    <Box mt={{ base: '5rem', md: '8rem' }}>
      <Box width="100%" height="60dvh" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%">
          <Heading as="h1" size="2xl" textAlign="center">
            Get in touch with Confido
          </Heading>
          <Heading as="h4" size="lg" textAlign="center" my="5">
            We are always happy to hear your feedback, questions, and ideas. Get in touch by phone or email.
          </Heading>
        </Flex>
      </Box>
      <Box width="100%" maxW="1200px" mx="auto">
        <Heading as="h2" size="2xl" mb="4">
          Ways to reach us
        </Heading>
        <Flex gap="6" textAlign="center" wrap={{ base: 'wrap', md: 'nowrap' }}>
          <Box
            flex="1"
            margin="50px auto"
            maxW="900px"
            minW="250px"
            border="1px solid"
            borderColor="gray.200"
            padding="20px"
            borderRadius="10px"
            boxShadow="md">
            <Heading as="h3" size="xl" mb="4">
              In-App Chat
            </Heading>
            <Text>Chat with our team from your Confido Legal app</Text>
            <Text>Monday – Friday</Text>
            <Text>7:00 AM – 5 PM PT</Text>
          </Box>
          <Box
            flex="1"
            margin="50px auto"
            maxW="900px"
            minW="250px"
            border="1px solid"
            borderColor="gray.200"
            padding="20px"
            borderRadius="10px"
            boxShadow="md">
            <Heading as="h3" size="xl" mb="4">
              Call
            </Heading>
            <Text>866-569-9725</Text>
            <Text>Monday – Friday</Text>
            <Text>7:00 AM – 5 PM PT</Text>
          </Box>
          <Box
            flex="1"
            margin="50px auto"
            maxW="900px"
            minW="250px"
            border="1px solid"
            borderColor="gray.200"
            padding="20px"
            borderRadius="10px"
            boxShadow="md">
            <Heading as="h3" size="xl" mb="4">
              Email
            </Heading>
            <Text>Email us at</Text>
            <Text>support@confidolegal.com</Text>
          </Box>
          <Box
            flex="1"
            margin="50px auto"
            maxW="900px"
            minW="250px"
            border="1px solid"
            borderColor="gray.200"
            padding="20px"
            borderRadius="10px"
            boxShadow="md">
            <Heading as="h3" size="xl" mb="4">
              Address
            </Heading>
            <Text>1037 NE 65th St #81826</Text>
            <Text>Seattle, WA 98115</Text>
          </Box>
        </Flex>
      </Box>
      <WhatClientsSay />
      <GetStartedToday />
      <Footer />
    </Box>
  );
}

export default Contact;
