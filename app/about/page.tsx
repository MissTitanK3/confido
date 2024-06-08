import Footer from '@/components/Footer';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AJ from '@/public/images/leadership-people/AJ.webp';
import Emery from '@/public/images/leadership-people/Emery.webp';
import Stephanie from '@/public/images/leadership-people/Stephanie.webp';
import Trevor from '@/public/images/leadership-people/Trevor.webp';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import LeadershipCard, { LeadershipProps } from '@/components/about/LeadershipCard';
import ABA from '@/public/images/featured-logos/aba.webp';
import Lawsites from '@/public/images/featured-logos/lawsites.png';
import Lex from '@/public/images/featured-logos/logo-lexblog.webp';
import GrayscaleImage from '@/components/common/GrayScaleImg';
import JobAccordian from '@/components/about/JobAccordian';

const leadershipData: LeadershipProps[] = [
  {
    image: AJ,
    imgageAlt: 'AJ Shankar',
    imgWidth: 200,
    imgHeight: 200,
    firstName: 'AJ',
    lastName: 'Shankar',
    linkedInLink: 'https://www.linkedin.com/in/sgwatanabe/',
    BioText: () => (
      <>
        <Text>
          Ever since my brother gave me a coding book for Christmas, I have been fascinated with coding. Looking back,
          it’s funny because the coding language in the book was called BlitzMax which, since the book, I have never
          used. I doubt many people have even heard of it. But this book gave me a good foundation of the basics of
          coding: variables, loops, functions, etc. and I’ve been a hooked ever since. I began taking as many Codecademy
          courses I could, and I knew this would be my major once I got to college.
        </Text>
        <br />
        <Text>
          My years of taking classes in software and hardware design at Iowa State University has only increased and
          refined my love for programming. Because of the broad range of projects and work experience I have, I’ve had
          the opportunity to narrow my focus to three areas of interest: artificial intelligence, robotics, and web
          development.
        </Text>
        <br />
        <Text>
          My interest in artificial intelligence and robotics comes from my history with the Unity game engine and
          virtual reality. After ML Agents was released and OpenAI showed the unique power it brings to real world
          applications (robotic hand solving a Rubix Cube), I have been obsessed with the applications it could be used
          in. With my background in Unity and machine learning, I really feel that my experiences are uniquely suited
          for this field.
        </Text>
        <br />
        <Text>
          Web development is also a passion of mine. Ever since my brother (also a Software Engineer) got me to start
          using React, the opportunities this library has opened for online applications is incredibly intriguing.
          Products such as Google Drive show me that you don’t need to download an application onto your computer to
          have a useful product. The accessibility that websites enable is the feature that gets me excited about the
          opportunities within web development.
        </Text>
        <br />
        <Text>
          Although these are my current interests, I love the field of Software Engineering as a whole and I am eager to
          learn about it all. My years at Iowa State have given me the knowledge I need to be able to pick up any job as
          a Software Engineer and thrive through hard work. I can’t wait to get out there and start working on software
          that will be used every day.
        </Text>
      </>
    ),
  },
  {
    image: Emery,
    imgageAlt: 'Emery Wager',
    imgWidth: 200,
    imgHeight: 200,
    firstName: 'Emery',
    lastName: 'Wager',
    linkedInLink: '/',
    BioText: () => (
      <Text>
        Removing financial barriers for entrepreneurial law firms. Gravity Legal reduces the risk, cost, and
        administrative burden of accepting payments and managing funds in a trust or IOLTA account.
      </Text>
    ),
  },
  {
    image: Trevor,
    imgageAlt: 'Trevor',
    imgWidth: 200,
    imgHeight: 200,
    firstName: 'Trevor',
    lastName: 'Wager',
    linkedInLink: '/',
    BioText: () => (
      <>
        <Text>
          Almost one year ago, our small group split out from our parent company Gravity Payments to begin our own
          business. Forming Confido Legal with my co-founders Emery Wager, Trevor Hanus & AJ Hanus has been an amazing
          adventure. In the last year, we have grown our customers, revenue, and now we are growing our team.
        </Text>
        <br />
        <Text>
          Key areas of interest: exploring any of the latest technologies, validating ideas, IoT, renewable energy
        </Text>
      </>
    ),
  },
  {
    image: Stephanie,
    imgageAlt: 'Stephanie Watanabe',
    imgWidth: 200,
    imgHeight: 200,
    firstName: 'Stephanie',
    lastName: 'Watanabe',
    linkedInLink: '/',
    BioText: () => (
      <>
        <Text>
          Almost one year ago, our small group split out from our parent company Gravity Payments to begin our own
          business. Forming Confido Legal with my co-founders Emery Wager, Trevor Hanus & AJ Hanus has been an amazing
          adventure. In the last year, we have grown our customers, revenue, and now we are growing our team.
        </Text>
        <br />
        <Text>
          Almost one year ago, our small group split out from our parent company Gravity Payments to begin our own
          business. Forming Confido Legal with my co-founders Emery Wager, Trevor Hanus & AJ Hanus has been an amazing
          adventure. In the last year, we have grown our customers, revenue, and now we are growing our team.
        </Text>
      </>
    ),
  },
];

type Props = {};

function About({}: Props) {
  return (
    <Box mt={{ base: '5rem', md: '8rem' }}>
      <Box width="100%" height="60dvh" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%">
          <Heading as="h1" size="2xl" textAlign="center">
            Building the Future of Finance in Law
          </Heading>
        </Flex>
      </Box>
      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%" textAlign="center">
          <Heading as="h2" mb="4">
            Mission
          </Heading>
          <Text mb="4">
            We envision a world where a law firm never has to turn away a client because that client can&apos;t pay.
          </Text>
          <Text mb="4">
            By adding financial flexibility at the point where lawyers and clients transact, we increase the number of
            people who can access the justice system and expand the addressable market for our law firm clients.
          </Text>
        </Flex>
      </Box>
      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%" textAlign="center">
          <Heading as="h2" mb="4">
            Core principles
          </Heading>
          <Text mb="4">Our core principles guide our decisions both big and small:</Text>
          <Text mb="4">We believe in purpose over profit</Text>
          <Text mb="4">We believe that each team member is an owner</Text>
          <Text mb="4">We believe we thrive in a culture of mutual support</Text>
          <Text mb="4">We believe in building for the long term</Text>
        </Flex>
      </Box>
      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%" textAlign="center">
          <Heading as="h2" mb="4">
            What we do
          </Heading>
          <Text mb="4">We build the most powerful embedded payments and money movement developer tools in legal.</Text>
          <Text mb="4">
            Our platform allows legal technology companies to quickly deliver embedded payments and finance features
            tailored to the unique processes and rules of the legal profession.
          </Text>
        </Flex>
      </Box>
      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%" textAlign="center">
          <Heading as="h2" mb="50">
            Leadership
          </Heading>
          <Flex align="center" justify="center" gap={6} wrap={{ base: 'wrap', md: 'nowrap' }}>
            {leadershipData.reverse().map((leader, index) => {
              return <LeadershipCard key={index} {...leader} />;
            })}
          </Flex>
        </Flex>
      </Box>
      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%" textAlign="center">
          <Heading as="h2" mb="4">
            Featured in
          </Heading>
          <Flex align="center" justify="center" gap={6} wrap={{ base: 'wrap', md: 'nowrap' }}>
            <GrayscaleImage src={ABA} alt="ABA" />
            <GrayscaleImage src={Lawsites} alt="Lawsites" />
            <GrayscaleImage src={Lex} alt="Lex" />
          </Flex>
        </Flex>
      </Box>
      <Box width="100%" maxW="1200px" mx="auto" mb="100px">
        <Flex align="center" direction="column" justify="center" height="100%" textAlign="center">
          <Heading as="h2" mb="4">
            Join the Team
          </Heading>
          <JobAccordian />
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
}

export default About;
