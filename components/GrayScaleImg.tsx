import { Box } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

type GrayscaleImageProps = {
  src: StaticImageData;
  alt: string;
};

export default function GrayscaleImage({ src, alt }: GrayscaleImageProps) {
  return (
    <Box m="1rem">
      <Box
        as="div"
        sx={{
          filter: 'grayscale(100%)',
          transition: 'filter 0.3s',
          ':hover': {
            filter: 'grayscale(0%)',
          },
        }}>
        <Image src={src} alt={alt} width={120} height={120} />
      </Box>
    </Box>
  );
}
