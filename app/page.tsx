'use client';

import styles from './page.module.css';
import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import HelpCard from '@/components/common/HelpCard';
import AdminIcon from '@/public/images/icons/admin-work.webp';
import ClientExp from '@/public/images/icons/client-experience.webp';
import Collections from '@/public/images/icons/collections.webp';
import ReducedCost from '@/public/images/icons/reduce-cost.webp';
import ReduceRisk from '@/public/images/icons/reduce-risk.webp';
import Hero from '@/components/Hero';
import Lawcus from '@/public/images/partners-badges/Lawcus-Logo.webp';
import LeanLaw from '@/public/images/partners-badges/partner-leanlaw.webp';
import Litify from '@/public/svg/litify.svg';
import Matter from '@/public/images/partners-badges/matter365.webp';
import QuickBooks from '@/public/images/partners-badges/Intuit_QSP_Badge.webp';
import { useEffect } from 'react';
import GrayscaleImage from '@/components/common/GrayScaleImg';
import VideoPlayer from '@/components/common/VideoPlayer';
import Footer from '@/components/Footer';
import GetStartedToday from '@/components/common/GetStartedToday';
import WhatClientsSay from '@/components/common/WhatClientsSay';
import Link from 'next/link';

export default function Home() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://play.vidyard.com/embed/v4.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main
      className={`${styles.main}`}
      style={{
        background:
          colorMode === 'dark'
            ? 'linear-gradient(45deg, #333333, #222222, #111111)'
            : 'linear-gradient(45deg, #e6e6e6, #cccccc, #b3b3b3)',
      }}>
      <Hero />
      <Heading sx={{ margin: '5rem auto', textAlign: 'center' }} as="h2">
        How We Help Law Firms
      </Heading>
      <Flex
        align="center"
        flexWrap="wrap"
        justify="space-evenly"
        p="10px 20px 0 20px"
        textAlign="center"
        w="100%"
        mb="5rem">
        <HelpCard
          headingText="Reduce Cost"
          icon={ReducedCost}
          iconAlt="Admin Work"
          text="Reduce processing fees using alternative payments acceptance methods and fee management tools."
        />
        <HelpCard
          headingText="Increase Collections"
          icon={Collections}
          iconAlt="Collections"
          text="Payments acceptance designed to help you take payment earlier and get paid faster."
        />
        <HelpCard
          headingText="Automate Work"
          icon={AdminIcon}
          iconAlt="Admin Work"
          text="Build payments acceptance into your existing intake, scheduling, and collections workflows."
        />
        <HelpCard
          headingText="Improve Client Experience"
          icon={ClientExp}
          iconAlt="Client Experience"
          text="Reduce friction in the payment experience with flexible, mobile-friendly payment pages."
        />
        <HelpCard
          headingText="Reduce Risk"
          icon={ReduceRisk}
          iconAlt="Reduce Risk"
          text="Trust account management designed to help you comply with the rules of professional conduct."
        />
      </Flex>
      <Heading sx={{ margin: '5rem auto', textAlign: 'center' }} as="h2">
        Trusted By Our Partners
      </Heading>
      <Flex
        align="center"
        flexWrap="wrap"
        justify="space-evenly"
        p="10px 20px 0 20px"
        textAlign="center"
        w="100%"
        bg="#577ead"
        mb="5rem">
        <GrayscaleImage src={Lawcus} alt="Lawcus logo" />
        <GrayscaleImage src={LeanLaw} alt="LeanLaw logo" />
        <GrayscaleImage src={Litify} alt="Litify logo" />
        <GrayscaleImage src={Matter} alt="Matter365 logo" />
        <GrayscaleImage src={QuickBooks} alt="QuickBooks logo" />
      </Flex>
      <VideoPlayer videoSrc="https://play.vidyard.com/WDupDQdtpcDmXQPLXpLdkY.jpg" videoUUID="WDupDQdtpcDmXQPLXpLdkY" />
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
          Ready to sign up?
        </Heading>
        <Text mb="1rem">No monthly, setup or termination fees. Get started today.</Text>
        <Link href="https://app.gravity-legal.com/signup" target="_blank" passHref>
          <Button>Sign Up</Button>
        </Link>
      </Flex>
      <WhatClientsSay />
      <GetStartedToday />
      <Footer />
    </main>
  );
}
