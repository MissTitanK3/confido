'use client';

import { Button, Divider, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

export type PartnerData = {
  companyLogo: StaticImageData;
  companyNameIfNotInLogo?: string;
  learnMoreLink: string;
  listItems: string[];
  logoAlt: string;
  logoHeight: number;
  logoWidth: number;
};

function PartnerCard({
  companyLogo,
  companyNameIfNotInLogo,
  learnMoreLink,
  listItems,
  logoAlt,
  logoHeight,
  logoWidth,
}: PartnerData) {
  return (
    <Flex
      direction="column"
      color="whitesmoke"
      wrap="wrap"
      justify="space-evenly"
      p="10px 20px 0 20px"
      textAlign="center"
      maxW="1080px"
      mx="auto"
      mb="5rem">
      <Flex align="center" justify="space-between" mb="1rem">
        <Image src={companyLogo} alt={logoAlt} width={logoWidth} height={logoHeight} />
        {companyNameIfNotInLogo && (
          <Heading ml="50px" as="h4">
            {companyNameIfNotInLogo}
          </Heading>
        )}
        <Link href={learnMoreLink} passHref>
          <Button>Learn More</Button>
        </Link>
      </Flex>
      <List spacing={4} my="3rem">
        {listItems.map((item, index) => (
          <ListItem key={index}>
            <Flex align="center">
              <FaCheck color="#3585F7" size={24} style={{ marginRight: '1.5rem' }} />
              {item}
            </Flex>
          </ListItem>
        ))}
      </List>
      <Divider my="3rem" />
    </Flex>
  );
}

export default PartnerCard;
