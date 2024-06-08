import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { ComponentType, ReactNode } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import ViewBio from '../common/Modal';

export type LeadershipProps = {
  image: StaticImageData;
  imgageAlt: string;
  imgWidth: number;
  imgHeight: number;
  firstName: string;
  lastName: string;
  linkedInLink: string;
  BioText: ComponentType;
};

function LeadershipCard({
  image,
  imgageAlt,
  imgWidth,
  imgHeight,
  firstName,
  lastName,
  linkedInLink,
  BioText,
}: LeadershipProps) {
  return (
    <Box>
      <Flex align="center" direction="column" gap={4}>
        <Image src={image} alt={imgageAlt} width={imgWidth} height={imgHeight} />
        <Heading as="h4" size="lg" color="#3585F7">
          {firstName}
        </Heading>
        <Heading as="h4" size="lg">
          {lastName}
        </Heading>
        <Link href={linkedInLink}>
          <FaLinkedin size={30} color="#3585F7" />
        </Link>
        <ViewBio modalTitle={`${firstName} ${lastName}`}>
          <BioText />
        </ViewBio>
      </Flex>
    </Box>
  );
}

export default LeadershipCard;
