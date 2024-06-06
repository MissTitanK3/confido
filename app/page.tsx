'use client';

import styles from './page.module.css';
import { Button, Flex, Heading, Text, useColorMode } from '@chakra-ui/react';
import HelpCard from '@/components/HelpCard';
import AdminIcon from '@/public/images/admin-work.webp';
import ClientExp from '@/public/images/client-experience.webp';
import Collections from '@/public/images/collections.webp';
import ReducedCost from '@/public/images/reduce-cost.webp';
import ReduceRisk from '@/public/images/reduce-risk.webp';
import Hero from '@/components/Hero';
import Lawcus from '@/public/images/Lawcus-Logo.webp';
import LeanLaw from '@/public/images/partner-leanlaw.webp';
import Litify from '@/public/svg/litify.svg';
import Matter from '@/public/images/matter365.webp';
import QuickBooks from '@/public/images/Intuit_QSP_Badge.webp';
import { useEffect } from 'react';
import AnnMarie from '@/public/images/Ann_Marie.webp';
import Jacqueline from '@/public/images/Jacqueline_Horani.webp';
import Judie from '@/public/images/Judie_Saunders.jpg';
import { Opinion } from '@/components/ScrollGallery';
import GrayscaleImage from '@/components/GrayScaleImg';
import VideoPlayer from '@/components/VideoPlayer';
import Footer from '@/components/Footer';
import GetStartedToday from '@/components/GetStartedToday';
import WhatClientsSay from '@/components/WhatClientsSay';

const opinions: Opinion[] = [
  {
    id: 1,
    image: AnnMarie,
    imageAlt: 'Ann Marie',
    opinion: [
      `Confido Legal has significantly streamlined our accounts receivable process. It's easy to create a secure payment link that I can send through our regular billing system or in an email. The Confido Legal panel makes it easy to check whether payments have been made, and follow-up with clients on a timely basis regarding outstanding balances. It takes a fraction of the time compared to our prior process. Thank you, Confido!`,
    ],
    name: 'Anne-Marie E. Sargent',
    title: 'Connor & Sargent, PLLC',
  },
  {
    id: 2,
    image: Jacqueline,
    imageAlt: 'Jacqueline Horani',
    opinion: [
      `I'm proud to be a client of Confido Legal and Gravity Payments and have had the most human vendor experience since signing up. I get an excellent and simple user experience for my clients (extremely important as I've had so many issues with ZellePay and PayPal), low fees and a responsive and innovative customer support team that actually lets me help collaborate on creating a more meaningful product, AND I get to support a company that values their employees (min. $70k salary for all) and cares about giving back in meaningful ways.`,
    ],
    name: 'Jacqueline Horani',
    title: 'Horani Law, PLLC',
  },
  {
    id: 3,
    image: Judie,
    imageAlt: 'Judie Saunders',
    opinion: [
      `I learned about Confido Legal through their podcast Financially Legal. After my first episode I reached out to Confido, because the show was packed with actionable legal tips.`,
      `From my first interaction with Confido Legal I received high touch service. The entire customer service experience from setting up my account to receiving online payments is stress free and easy.`,
      `More importantly, my clients love the friction free online payments process which allows them to quickly pay bills with credit or debit cards.`,
      `Like many law firms, I used another well known online payment provider for client billing but after comparing the fees, customer service and ease of use, I now encourage other attorneys to switch to Confido Legal.`,
    ],
    name: 'Judie Saunders',
    title: 'Law Offices of Judie Saunders',
  },
];

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
        <Button>Sign Up</Button>
      </Flex>
      <WhatClientsSay />
      <GetStartedToday />
      <Footer />
    </main>
  );
}
