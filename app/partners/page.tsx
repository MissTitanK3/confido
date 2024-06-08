import Footer from '@/components/Footer';
import GetStartedToday from '@/components/common/GetStartedToday';
import WhereToStart from '@/components/partners/WhereToStart';
import WhatClientsSay from '@/components/common/WhatClientsSay';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import LeanLogo from '../../public/images/partners-badges/LeanLawIcon.webp';
import Lawcus from '../../public/images/partners-badges/lawcusLogo.webp';
import Lawmatics from '../../public/images/partners-badges/lawmatics.webp';
import Litify from '../../public/images/partners-badges/litify.webp';
import Fidu from '../../public/images/partners-badges/fidu.webp';
import CleverCase from '../../public/images/partners-badges/clevercase.webp';
import Noodle from '../../public/images/partners-badges/NoodleLogo.webp';
import Matter from '../../public/images/partners-badges/matter365.webp';
import Quickbooks from '../../public/images/partners-badges/Intuit_QSP_Badge.webp';
import Salesforce from '../../public/images/partners-badges/salesforce.webp';
import Zapier from '../../public/images/partners-badges/zapier.webp';
import Soluno from '../../public/images/partners-badges/soluno.webp';
import SmithAi from '../../public/images/partners-badges/smith-ai.webp';
import Lawlytics from '../../public/images/partners-badges/lawlytics.webp';
import PartnerCard, { PartnerData } from '@/components/partners/PartnerCard';

type Props = {};

const parterData: PartnerData[] = [
  {
    companyNameIfNotInLogo: 'Clio Manage',
    logoAlt: 'LeanLaw Logo',
    logoHeight: 0,
    logoWidth: 0,
    learnMoreLink: '/partners/clio',
    listItems: [
      'Sync all Clio bills with Confido Legal',
      'Send outstanding Clio bills in seconds',
      'Customize notes to each client or use a default message',
      'Clients pay invoices or trust requests by clicking the link sent to their email',
      'Accept credit/debit cards and bank transfers (ACH)',
      'Automatically charge credit card fees to clients at the time of payment',
    ],
  },
  {
    companyLogo: LeanLogo,
    companyNameIfNotInLogo: 'LeanLaw',
    logoAlt: 'LeanLaw Logo',
    logoHeight: 75,
    logoWidth: 75,
    learnMoreLink: '/partners/lean-law',
    listItems: [
      'Send trust deposit requests directly from LeanLaw',
      'Customize trust request messages and add multiple recipients',
      'Trust deposits are automatically added to the client and matter sub-liability accounts in Quickbooks Online',
    ],
  },
  {
    companyLogo: Lawmatics,
    logoAlt: 'Lawmatics Logo',
    logoHeight: 55,
    logoWidth: 255,
    learnMoreLink: '/partners/lawmatics',
    listItems: [
      'Allow clients to pay invoices and trust deposit requests electronically by clicking secure payment links',
      'Automatically apply payments to invoices in Lawmatics',
      `Automatically apply payments on trust deposit requests to the client's trust account balance in Lawmatics`,
    ],
  },
  {
    companyLogo: Lawcus,
    companyNameIfNotInLogo: 'Lawcus',
    logoAlt: 'Lawcus Logo',
    logoHeight: 55,
    logoWidth: 55,
    learnMoreLink: '/partners/lawcus',
    listItems: [
      'Allow clients to pay invoices and trust deposit requests electronically by clicking secure payment links',
      'Automatically apply payments to invoices and client trust balances in Lawcus',
      'Allow clients to pay multiple invoices with one payment',
    ],
  },
  {
    companyLogo: Litify,
    logoAlt: 'Litify Logo',
    logoHeight: 155,
    logoWidth: 250,
    learnMoreLink: '/partners/litify',
    listItems: [
      'Allow clients to pay invoices and trust deposit requests electronically by clicking secure payment links',
      'Automatically apply payments to invoices and client trust balances in Litify',
      'Set up automated recurring payment plans directly in Litify',
      'Allow clients to pay invoices through the Litify client portal',
    ],
  },
  {
    companyLogo: Fidu,
    logoAlt: 'Fidu Logo',
    logoHeight: 55,
    logoWidth: 100,
    learnMoreLink: '/partners/fidu',
    listItems: [
      'Create and enroll clients in automated subscription plans',
      'Accept payment for flat fee and recurring matters',
      'Send automated reminders of upcoming subscription payments',
    ],
  },
  {
    companyLogo: CleverCase,
    logoAlt: 'Clever Case Logo',
    logoHeight: 55,
    logoWidth: 275,
    learnMoreLink: '/partners/clever-case',
    listItems: [
      'Allow clients to pay invoices and trust deposit requests electronically by clicking secure payment links',
      'Automatically apply payments to invoices and client trust balances in Clever Case',
      'Allow clients to pay multiple invoices with one payment',
    ],
  },
  {
    companyLogo: Noodle,
    logoAlt: 'Noodle Logo',
    logoHeight: 55,
    logoWidth: 185,
    learnMoreLink: '/partners/noodle',
    listItems: [
      'Allow clients to pay invoices and trust deposit requests electronically by clicking secure payment links',
      'Accept payments in onboarding and intake workflows',
    ],
  },
  {
    companyLogo: Matter,
    logoAlt: 'Matter365 Logo',
    logoHeight: 55,
    logoWidth: 185,
    learnMoreLink: '/partners/matter',
    listItems: [
      'Send trust deposit requests directly from Matter365',
      'Customize trust request messages and add multiple recipients',
      `Trust deposits are automatically added to the client's trust balance in Matter365 and Quickbooks`,
    ],
  },
  {
    companyLogo: Quickbooks,
    logoAlt: 'Quickbooks Logo',
    logoHeight: 55,
    logoWidth: 205,
    learnMoreLink: '/partners/quickbooks',
    listItems: [
      'Send QuickBooks invoices and get paid electronical',
      'Payment links are automatically added to QuickBooks invoices',
      `Both trust and operating payments made in Confido Legal are automatically added to QuickBooks Intuit and QuickBooks are registered trademarks of Intuit Inc. Used with permission`,
    ],
  },
  {
    companyLogo: Salesforce,
    logoAlt: 'Salesforce Logo',
    logoHeight: 55,
    logoWidth: 155,
    learnMoreLink: '/partners/salesforce',
    listItems: [
      'Allow clients to pay invoices and trust deposit requests electronically by clicking secure payment links',
      'Automatically apply payments to invoices in Salesforce',
      `Sync invoice payment and accounts receivable data to accounting systems like Accounting Seed and QuickBooks`,
    ],
  },
  {
    companyLogo: Zapier,
    logoAlt: 'Zapier Logo',
    logoHeight: 55,
    logoWidth: 155,
    learnMoreLink: '/partners/zapier',
    listItems: [
      'Trigger actions in thousands of applications when a payment is made in Confido Legal',
      'Send payment requests by email when an action takes place in another application',
    ],
  },
  {
    companyLogo: Soluno,
    logoAlt: 'Soluno Logo',
    logoHeight: 55,
    logoWidth: 185,
    learnMoreLink: '/partners/soluno',
    listItems: [
      'Soluno is the time, billing, and accounting solution made for law firms',
      'Allow clients to pay invoices or trust deposit requests electronically by clicking secure payment links',
      'Automatically apply payments to invoices or client trust balances in Soluno',
    ],
  },
  {
    companyLogo: SmithAi,
    companyNameIfNotInLogo: 'Smith.ai',
    logoAlt: 'Smith.ai Logo',
    logoHeight: 55,
    logoWidth: 155,
    learnMoreLink: '/partners/smith-ai',
    listItems: [
      'Send payment requests to new clients or prospects created by Smith.ai',
      'Provide payment processing access to Smith.ai to take payment for initial consults or retainers',
    ],
  },
  {
    companyLogo: Lawlytics,
    logoAlt: 'LawLytics Logo',
    logoHeight: 55,
    logoWidth: 215,
    learnMoreLink: '/partners/lawlytics',
    listItems: [
      'Use LawLytics to create websites that attract and convert clients',
      'Add Confido Legal to accept payments through your website',
      'Charge for initial consults when prospective clients convert on your website',
      'Sell flat fee legal services directly on your website',
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
