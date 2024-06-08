import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  developerImage: StaticImageData;
  developerImgHeight: number;
  developerImgWidth: number;
  developerName: string;
  developerTitle: string;
  developerImgAlt?: string;
  partnerLogo: StaticImageData;
  partnerExperience: string;
  partnerImageAlt: string;
  partnerImageWidth: number;
  partnerImageHeight: number;
};

function ExperienceCard({
  developerImage,
  developerImgHeight,
  developerImgWidth,
  developerName,
  developerTitle,
  partnerLogo,
  partnerExperience,
  partnerImageAlt,
  partnerImageWidth,
  partnerImageHeight,
}: Props) {
  return (
    <Box
      margin="50px auto"
      maxW="900px"
      border="1px solid"
      borderColor="gray.200"
      padding="20px"
      borderRadius="10px"
      boxShadow="md">
      <Flex justify="space-evenly" align="center" wrap="wrap">
        <Image src={developerImage} alt={developerName} width={developerImgWidth} height={developerImgHeight} />
        <Flex direction="column" align="center" justify="space-between" ml="4">
          <Heading as="h4" fontWeight="bold">
            {developerName}
          </Heading>
          <Heading as="h5" fontSize="1.3rem" fontWeight="medium" m="4">
            {developerTitle}
          </Heading>
          <Image src={partnerLogo} alt={partnerImageAlt} width={partnerImageWidth} height={partnerImageHeight} />
        </Flex>
      </Flex>
      <Text mt="4" fontWeight="medium">
        {partnerExperience}
      </Text>
    </Box>
  );
}

export default ExperienceCard;
