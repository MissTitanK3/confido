import { Container, Box } from '@chakra-ui/react';
import Image from 'next/image';
import { PiAppWindowLight } from 'react-icons/pi';
import { SiHtmx } from 'react-icons/si';
import ConfidoLogo from '@/public/images/Confido_footer_logo_icon.webp';

function WebDevStack() {
  return (
    <Container
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      marginTop={{ base: '250px', md: '0' }}
      height={{ base: '300px', md: '500px' }}
      width={{ base: '300px', md: '500px' }}
      overflow="hidden">
      <Box position="absolute" zIndex="-1" top={{ base: '80px', md: '130px' }} right={{ base: '60px', md: '110px' }}>
        <Image src={ConfidoLogo} alt="Confido Legal Logo" width={50} height={50} />
      </Box>
      <Box fontSize={{ base: '300px', md: '500px' }}>
        {' '}
        <PiAppWindowLight />
      </Box>
      <Box position="absolute" top="45%" left={{ base: '25%', md: '35%' }} fontSize={{ base: '100px', md: '150px' }}>
        <SiHtmx />
      </Box>
    </Container>
  );
}

export default WebDevStack;
