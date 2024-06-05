import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  videoSrc: string;
  videoUUID: string;
};

function VideoPlayer({ videoSrc, videoUUID }: Props) {
  return (
    <Flex width="1080px" justify="center" align="center" mb="5rem">
      <Box width={{ base: '30%', sm: '50%', md: '75%', lg: '80%', xl: '100%' }} height="auto" position="relative">
        <Image
          layout="responsive"
          width={500}
          height={500}
          className="vidyard-player-embed"
          src={videoSrc}
          data-uuid={videoUUID}
          data-v="4"
          data-type="inline"
          alt="Vidyard video player"
        />
      </Box>
    </Flex>
  );
}

export default VideoPlayer;
