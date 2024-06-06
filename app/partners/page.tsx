import Footer from '@/components/Footer';
import GetStartedToday from '@/components/GetStartedToday';
import WhereToStart from '@/components/partners/WhereToStart';
import WhatClientsSay from '@/components/WhatClientsSay';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import LeanLogo from '../../public/images/partners-badges/LeanLawIcon.webp';
import Lawcus from '../../public/images/partners-badges/lawcusLogo.webp';
import PartnerCard, { PartnerData } from '@/components/partners/PartnerCard';

type Props = {};

const parterData: PartnerData[] = [
  {
    companyLogo: LeanLogo,
    companyNameIfNotInLogo: 'LeanLaw',
    logoAlt: 'LeanLaw Logo',
    logoHeight: 75,
    logoWidth: 75,
    learnMoreLink: '/partners',
    listItems: [
      'Send trust deposit requests directly from LeanLaw',
      'Customize trust request messages and add multiple recipients',
      'Trust deposits are automatically added to the client and matter sub-liability accounts in Quickbooks Online',
    ],
  },
  {
    companyLogo: Lawcus,
    companyNameIfNotInLogo: 'Lawcus',
    logoAlt: 'Lawcus Logo',
    logoHeight: 55,
    logoWidth: 55,
    learnMoreLink: '/partners',
    listItems: [
      'Allow clients to pay invoices and trust deposit requests electronically by clicking secure payment links',
      'Automatically apply payments to invoices and client trust balances in Lawcus',
      'Allow clients to pay multiple invoices with one payment',
    ],
  },
];

function Partners({}: Props) {
  return (
    <Box mt={{ base: '12rem', md: '0' }}>
      <Flex justifyContent="center" direction="column" align="center" mb="2rem">
        <Heading sx={{ margin: '5rem auto', textAlign: 'center' }} as="h2">
          Confido Legal Partners
        </Heading>
        <Text fontSize="1.5rem">
          Embed payments into your time/billing, case management and CRM platforms using one of our partners
        </Text>
      </Flex>

      {parterData.map((partner, index) => (
        <PartnerCard key={index} {...partner} />
      ))}

      <WhereToStart />
      <WhatClientsSay />
      <GetStartedToday />
      <Footer />
    </Box>
  );
}

export default Partners;
