import { Box, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  image: StaticImageData;
  imageAlt: string;
  opinion: string[];
  name: string;
  title: string;
};

function OpinionCard({ image, imageAlt, opinion, name, title }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mb="3rem"
      mx={10}
      p={10}
      bg="#0F1F33"
      color="whitesmoke"
      w="340px"
      borderRadius="10px">
      <Image
        src={image}
        alt={imageAlt}
        width={120}
        height={120}
        style={{
          margin: '1rem',
          borderRadius: '50%',
          border: '1px solid whitesmoke',
          padding: '5px',
        }}
      />
      <Text m="1rem" textAlign="center">
        {opinion.map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
            <br />
          </React.Fragment>
        ))}
      </Text>
      <Text>{name}</Text>
      <Text>{title}</Text>
    </Box>
  );
}

export default OpinionCard;
