'use client';
import Footer from '@/components/Footer';
import GetStartedToday from '@/components/common/GetStartedToday';
import VideoPlayer from '@/components/common/VideoPlayer';
import { Box, Container, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import MarkZocker from '@/public/images/patner-images/MarkZocker.webp';
import CleverCase from '@/public/images/partners-badges/clevercase.webp';
import ExperienceCard from '@/components/developer/ExperienceCard';
import LegalDocImage from '@/public/images/ConfidoLegalDocumentation.webp';
import WebDevStack from '@/components/developer/WebDevStack';
import BlaineKorte from '@/public/images/patner-images/BlaineKorte.webp';
import FiduLogo from '@/public/images/partners-badges/fidu.webp';

type Props = {};

//? Both listItems and benefitListItems are the same, should we have different items for each list?
const growthListItems = [
  'Trust account compliance management',
  'Unlimited trust and operating bank accounts linked to a single firm',
  'Payments and money transfers tracked by client and matter',
  'Client and matter outstanding balance and payment history',
  'Split trust/operating payments',
  'Trust-to-operating bank account transfers',
];

const benefitListItems = [
  'Trust account compliance management',
  'Unlimited trust and operating bank accounts linked to a single firm',
  'Payments and money transfers tracked by client and matter',
  'Client and matter outstanding balance and payment history',
  'Split trust/operating payments',
  'Trust-to-operating bank account transfers',
];

function DeveloperCenter({}: Props) {
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
      <Box width="100%" height="60dvh">
        <Box maxW="1200" marginX="auto" mb="100px">
          <Heading as="h1" size="2xl" textAlign="center">
            Embedded Payments and Finance for Legal Tech
          </Heading>
          <Heading as="h4" size="lg" textAlign="center" m="5">
            Design, Build and Own Your Embedded Payments Roadmap
          </Heading>
          <Text m="15px 0">
            We help you embed payments and other financial management features directly into your application. Our
            legal-specific integration tools allow you to get started quickly and accelerate your growth as you take
            ownership of the experience. Use Confido Legal to make your clients&apos; embedded finance experience unique
            to your application and a competitive advantage rather than a commodity.
          </Text>
        </Box>
        <GetStartedToday viewDocs />
      </Box>

      <Box maxW="1200" margin="100px auto">
        <Flex align="center" wrap="wrap">
          <WebDevStack />
          <Container>
            <Heading as="h2" size="2xl">
              Accelerate Growth
            </Heading>
            <Text m="15px 0" fontWeight={500} align="left">
              By integrating with Confido Legal, you get immediate access to legal-specific features without having to
              build them yourself:
            </Text>
            <List spacing={4} my="3rem">
              {growthListItems.map((item, index) => (
                <ListItem listStyleType="initial" key={index}>
                  <Flex align="center">{item}</Flex>
                </ListItem>
              ))}
            </List>
          </Container>
        </Flex>
      </Box>
      <Box maxW="1200" margin="150px auto">
        <Flex direction="row" align="center" wrap={{ base: 'wrap', md: 'unset' }}>
          <Flex justify="space-evenly" align="center" direction="column" height={350}>
            <Heading as="h2" size="2xl">
              Get Started Quickly
            </Heading>
            <Text m="15px 0" fontWeight={500} align="left">
              The Confido Legal GraphQL API puts you in the driver’s seat, helping you easily get and manage only the
              data you need. Use Confido Legal simply to process payments or leverage additional features such as our
              client and matter balance database.
            </Text>
          </Flex>
          <Image src={LegalDocImage} alt="screenshot of docs" width={600} height={600} />
        </Flex>
      </Box>
      <Box maxW="1200" margin="100px auto">
        <Flex justifyContent="center" direction="column" textAlign="center" wrap="wrap">
          <Heading as="h2">Own the Experience</Heading>
          <Text m="15px 0" fontWeight={500} align="left">
            Have us help with client support, sales and onboarding or choose to take these functions in-house.
          </Text>
          <Text m="15px 0" fontWeight={500} align="left">
            We&apos;ll give you tools and help you build legal-specific embedded payments expertise on your team, so you
            can control more of the experience and realize greater financial opportunity.
          </Text>
          <ExperienceCard
            developerImage={BlaineKorte}
            developerName="Blaine Korte"
            developerTitle="CTO - Fidu Legal"
            partnerLogo={FiduLogo}
            partnerExperience="Fidu’s integration with Confido Legal was built, tested and ready to launch into production within about a week by a single engineer. Confido has been a great partner for us – their team is amazing, engineers were very responsive and helpful and the API was really easy to work with."
            partnerImageAlt="Fidu Logo"
            partnerImageWidth={150}
            partnerImageHeight={150}
            developerImgHeight={300}
            developerImgWidth={300}
          />
          <ExperienceCard
            developerImage={MarkZocker}
            developerName="Mark Zocher"
            developerTitle="CTO - Clever Case"
            partnerLogo={CleverCase}
            partnerExperience="When we needed to integrate payments into our custom practice management platform, we found Confido Legal was a perfect fit. The thought and design that has gone into their product rivals the largest payment processors out there, and their new programming interfaces give us expansive power to analyze and automate our legal payments. I've enjoyed working with their friendly and supportive team, and I'm looking forward to what Confido Legal will come up with next!"
            partnerImageAlt="Clever Case Logo"
            partnerImageWidth={300}
            partnerImageHeight={300}
            developerImgHeight={300}
            developerImgWidth={300}
          />
        </Flex>
      </Box>
      <Box maxW="1200" margin="100px auto">
        <Flex justifyContent="center" direction="column" align="center">
          <Heading as="h2">Benefit as We Build</Heading>
          <Text m="15px 0" fontWeight={500} align="left">
            Our API is designed so that when we add new features and tender types, your clients get immediate access
            without any additional development work on your part. Past examples of these “pre-loaded” features include:
          </Text>
          <List spacing={4} my="3rem">
            {benefitListItems.map((item, index) => (
              <ListItem listStyleType="initial" key={index}>
                <Flex align="center">{item}</Flex>
              </ListItem>
            ))}
          </List>
          <Text m="15px 0" fontWeight={500} align="left">
            Unlike industry generic solutions, we’re 100% dedicated to helping law firms succeed. As a result, our
            product roadmap focuses on the tools and features specific to the business of law.
          </Text>
        </Flex>
      </Box>
      <GetStartedToday />
      <Flex justifyContent="center" direction="column" align="center" textAlign="center">
        <VideoPlayer
          videoSrc="https://play.vidyard.com/2cKzStt98aYztWhyhD8F7D.jpg"
          videoUUID="2cKzStt98aYztWhyhD8F7D"
        />
      </Flex>
      <Footer />
    </Box>
  );
}

export default DeveloperCenter;
