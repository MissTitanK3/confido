import Footer from '@/components/Footer';
import GetStartedToday from '@/components/GetStartedToday';
import PricingBox from '@/components/pricing/PricingBox';
import WhatClientsSay from '@/components/WhatClientsSay';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type Props = {};

function Pricing({}: Props) {
  return (
    <Box mt={{ base: '12rem', md: '0' }}>
      <Flex width="100%" height="90vh" justifyContent="center" direction="column" align="center">
        <Heading as="h2">Pricing</Heading>
        <Flex my="5rem" direction="row" maxW="1200px" flexWrap="wrap" justifyContent="center">
          <PricingBox
            percentage={1}
            boldText="Same-Day Bank Transfers"
            regularText="Per-transaction cost capped at $30"
          />
          <PricingBox
            percentage={2.95}
            boldText="Credit/Debit Card"
            regularText="Automatically charge credit card fees to the client*"
          />
        </Flex>
      </Flex>
      <Box maxW="1200" margin="auto">
        <Flex justifyContent="center" direction="column" align="center">
          <Heading as="h3">No monthly, annual or termination fees</Heading>
          <Text m="15px 0">
            <Link style={{ color: '#4c49e9', textDecoration: 'underline' }} href="/onboarding">
              Concierge onboarding
            </Link>{' '}
            $500 one-time investment (required for firms not integrating through{' '}
            <Link href="/partners"> one of our partners</Link>). ACH
          </Text>
          <Text m="15px 0">
            *For a list of state surcharging laws, rules and opinions,{' '}
            <Link style={{ color: '#4c49e9', textDecoration: 'underline' }} href="/financially-legal/state-rules">
              {' '}
              see this page
            </Link>
            .
          </Text>
          <Link href="/" passHref>
            <Button m="15px 0">Schedule A Demo</Button>
          </Link>
        </Flex>
      </Box>
      <Box maxW="1200" margin="auto">
        <Flex justifyContent="center" direction="column" align="center" textAlign="center">
          <Text m="15px 0" fontWeight={500}>
            Same-Day Bank Transfer daily cutoff: 1pm EST
          </Text>
          <Text m="15px 0" fontWeight={500}>
            $25 chargeback or unauthorized return fee applies (typically a rare event). Chargebacks can happen for a
            variety of reasons, ranging from accepting a fraudulent card to a client disputing the transaction.
          </Text>
        </Flex>
      </Box>
      <WhatClientsSay />
      <GetStartedToday />
      <Footer />
    </Box>
  );
}

export default Pricing;
