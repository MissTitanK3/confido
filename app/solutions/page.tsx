'use client';

import GetStartedToday from '@/components/common/GetStartedToday';
import WhatClientsSay from '@/components/common/WhatClientsSay';
import Footer from '@/components/Footer';
import IconHeading from '@/components/solutions/IconHeading';
import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { IoLogoUsd } from 'react-icons/io5';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa6';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import BlueCheckList from '@/components/common/BlueCheckList';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaArrowsLeftRight } from 'react-icons/fa6';
import { FaHourglassHalf } from 'react-icons/fa';
import { BsRecordCircle } from 'react-icons/bs';
import { MdOutlineReplayCircleFilled } from 'react-icons/md';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { BsStarHalf } from 'react-icons/bs';
import { ImMobile } from 'react-icons/im';
import { HiCloudDownload } from 'react-icons/hi';
import VideoPlayer from '@/components/common/VideoPlayer';

type Props = {};

function LawFirms({}: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://play.vidyard.com/embed/v4.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <Box mt={{ base: '5rem', md: '8rem' }}>
      <Box width="100%" height="60dvh" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%">
          <Heading as="h1" size="2xl" textAlign="center">
            The Financial Command Center for Your Law Firm
          </Heading>
          <Heading as="h4" size="lg" textAlign="center" my="5">
            Confido Legal is a payment processing and disbursement platform for the next generation of law firms.
          </Heading>
          <Link href="/" passHref>
            <Button>Schedule a Demo</Button>
          </Link>
        </Flex>
      </Box>

      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Heading as="h2" size="2xl" mb="4">
          Reduce Cost
        </Heading>
        <Text mb="4">
          Reduce processing fees using alternative payments acceptance methods and fee management tools.
        </Text>
        <IconHeading
          icon={<IoLogoUsd color="#3585F7" size={30} />}
          title="Automatically Charge Credit Card Fees to Clients"
          mb="6">
          <Text>
            Available in states where permitted by the rules of professional conduct and state laws. Download our
            state-by-state surcharging guide.
          </Text>
        </IconHeading>
        <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
          <Box flex="1" minW="250px">
            <IconHeading icon={<FaCheck color="#3585F7" size={30} />} title="No Nickel and Diming">
              <Text>Say goodbye to indecipherable credit card processing fees and pricing with a catch.</Text>
              <Text>We charge a simple flat rate and don’t sneak in extra fees along the way.</Text>
            </IconHeading>
          </Box>
          <Box flex="1" minW="250px">
            <IconHeading icon={<FaLock color="#3585F7" size={30} />} title="Fully-Integrated Bank Transfers">
              <Text>Allow clients to easily pay by less expensive means such as bank transfers.</Text>
              <Text>Turn off credit/debit card processing for certain transactions to manage fees.</Text>
            </IconHeading>
          </Box>
        </Flex>
        <Box as="hr" mt="6" />
      </Box>

      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Heading as="h2" mb="4">
          Automate Work
        </Heading>
        <Text mb="4">
          Build payments and disbursements into your existing intake, collections, and settlement workflows.
        </Text>
        <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
          <Box flex="1" minW="250px">
            <IconHeading icon={<MdKeyboardDoubleArrowDown color="#3585F7" size={30} />} title="Integrations">
              <Text>Integrate with the systems you already use.</Text>
              <Text>Track trust and operating account balances and reconcile transactions.</Text>
              <BlueCheckList listItems={['QuickBooks Online', 'Clio', 'LeanLaw']} />
              <Link href="/" passHref>
                <Button mt="4">View All Integrations</Button>
              </Link>
            </IconHeading>
          </Box>
          <Box flex="1" minW="250px">
            <IconHeading icon={<FaArrowsLeftRight color="#3585F7" size={30} />} title="Go 100% Paperless">
              <Text>Eliminate the headaches and risks associated with checks and wire transfers.</Text>
              <BlueCheckList
                listItems={[
                  'Accept online payments',
                  'Send money electronically',
                  'Transfer money between your trust and operating accounts',
                ]}
              />
            </IconHeading>
          </Box>
          <Box flex="1" minW="250px">
            <IconHeading icon={<IoDocumentTextOutline color="#3585F7" size={30} />} title="No-Code Workflows">
              <Text>Build custom, no-code workflows using Zapier or our URL redirects.</Text>
            </IconHeading>
          </Box>
        </Flex>
        <Box as="hr" mt="6" />
      </Box>

      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Heading as="h2" mb="4">
          Increase Collections
        </Heading>
        <Text mb="4">Improve your collection rate and reduce long-outstanding accounts receivable.</Text>
        <Flex direction="column" gap="6">
          <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
            <Box flex="1" minW="250px">
              <IconHeading icon={<FaHourglassHalf color="#3585F7" size={30} />} title="Payment Plans">
                <Text>Make it easy for clients to pay invoices over time.</Text>
              </IconHeading>
            </Box>
            <Box flex="1" minW="250px">
              <IconHeading icon={<BsRecordCircle color="#3585F7" size={30} />} title="Flat Fee Billing">
                <Text>
                  In most states, flat fees are considered earned upon receipt. Confido Legal allows you to easily send
                  payment requests for flat fee work.
                </Text>
              </IconHeading>
            </Box>
          </Flex>
          <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
            <Box flex="1" minW="250px">
              <IconHeading icon={<MdOutlineReplayCircleFilled color="#3585F7" size={30} />} title="Subscriptions">
                <Text>
                  Subscription legal services are a great way to improve collections and put client payments on
                  autopilot.
                </Text>
                <Text>
                  Collect a payment method once, and future payments are charged to your client’s bank account or card
                  on a designated schedule.
                </Text>
              </IconHeading>
            </Box>
            <Box flex="1" minW="250px">
              <IconHeading icon={<MdKeyboardDoubleArrowDown color="#3585F7" size={30} />} title="Evergreen Retainers">
                <Text>
                  Maintain an ongoing trust balance without the headaches. With split payments, clients can easily
                  deposit funds into your trust account at the same time they pay outstanding invoices.
                </Text>
              </IconHeading>
            </Box>
          </Flex>
          <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
            <Box flex="1" minW="250px">
              <IconHeading
                icon={<FaArrowRightArrowLeft color="#3585F7" size={30} />}
                title="Split Trust/Operating Payments">
                <Text>
                  For flat-fee work that includes third-party costs or for an evergreen retainer billing model, accept a
                  single payment, and designate portions of that payment to be deposited into your trust and operating
                  accounts.
                </Text>
              </IconHeading>
            </Box>
          </Flex>
        </Flex>
        <Box as="hr" mt="6" />
      </Box>

      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Heading as="h2" mb="4">
          Improve Client Experience
        </Heading>
        <Text mb="4">Build payments acceptance into your existing intake, scheduling, and collections workflows.</Text>
        <Flex direction="column" gap="6">
          <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
            <Box flex="1" minW="250px">
              <IconHeading icon={<BsStarHalf color="#3585F7" size={30} />} title="Partial Payments">
                <Text>Simple options for partial payments if clients can’t pay all at once</Text>
              </IconHeading>
            </Box>
            <Box flex="1" minW="250px">
              <IconHeading icon={<ImMobile color="#3585F7" size={30} />} title="Mobile Payments">
                <Text>Mobile-optimized payment pages allow clients to easily pay on the device of their choice</Text>
              </IconHeading>
            </Box>
          </Flex>
          <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
            <Box flex="1" minW="250px">
              <IconHeading
                icon={<FaArrowRightArrowLeft color="#3585F7" size={30} />}
                title="Split Trust/Operating Payments">
                <Text>
                  Billing clients for both trust requests and professional services? Clients pay once, and the money is
                  automatically split between bank accounts. No need to send multiple bills.
                </Text>
              </IconHeading>
            </Box>
            <Box flex="1" minW="250px">
              <IconHeading icon={<HiCloudDownload color="#3585F7" size={30} />} title="Keep Payment Methods on File">
                <Text>Clients can choose to keep their payment methods on file for convenient future payments.</Text>
                <Text>We handle the secure storage. Never view or handle the sensitive card or bank account data.</Text>
              </IconHeading>
            </Box>
          </Flex>
        </Flex>
        <Box as="hr" mt="6" />
      </Box>

      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Heading as="h2" mb="4">
          Reduce Risk
        </Heading>
        <Text mb="4">Trust account management designed to help you comply with the rules of professional conduct.</Text>
        <Flex direction="column" gap="6">
          <Flex justify="space-evenly" wrap={{ base: 'wrap', md: 'nowrap' }} gap="6">
            <Box flex="1" minW="250px">
              <IconHeading
                icon={<MdKeyboardDoubleArrowDown color="#3585F7" size={30} />}
                title="Processing Fees and the Rules of Professional Conduct">
                <BlueCheckList
                  listItems={[
                    'All processing fees are removed from the firm’s operating or business account.',
                    'No surcharges are ever deposited into the trust account.',
                  ]}
                />
              </IconHeading>
            </Box>
          </Flex>
        </Flex>
        <Box as="hr" mt="6" />
      </Box>
      <Flex justifyContent="center" direction="column" align="center" textAlign="center">
        <Heading as="h2" mb="4">
          How it works
        </Heading>
        <VideoPlayer
          videoSrc="https://play.vidyard.com/WDupDQdtpcDmXQPLXpLdkY.jpg"
          videoUUID="WDupDQdtpcDmXQPLXpLdkY"
        />
      </Flex>
      <WhatClientsSay />
      <GetStartedToday />
      <Footer />
    </Box>
  );
}

export default LawFirms;
